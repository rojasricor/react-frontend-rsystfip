import { createContext, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UNSET_STATUS, API_ROUTE } from "../constants";
import { formatTodaysDate, formatTodaysDateTime } from "../libs/todaylib";

export const PeopleContext = createContext();

export const PeopleContextProvider = ({ children }) => {
  // Id person param url GET
  const { id } = useParams();

  const [disabledAll, setDisabledAll] = useState(true);
  const [disabledAfterAutocomplete, setDisabledAfterAutocomplete] =
    useState(false);
  const [loading, setLoading] = useState(false);

  // Event id aux
  const [eventId, setEventId] = useState("");

  // Select components states
  const [person, setPerson] = useState(UNSET_STATUS);
  const [doctype, setDoctype] = useState(UNSET_STATUS);
  const [facultie, setFacultie] = useState(UNSET_STATUS);
  // Input components states
  const [doc, setDoc] = useState("");
  const [name, setName] = useState("");
  const [asunt, setAsunt] = useState("");
  const [color, setColor] = useState("#388cdc");
  const [date, setDate] = useState(formatTodaysDate());
  const [start, setStart] = useState(formatTodaysDateTime());
  const [end, setEnd] = useState(formatTodaysDateTime());
  const [status, setStatus] = useState(2);
  const [deans, setDeans] = useState(null);

  // Ref to component select of facultie
  const facultieSelectRef = useRef(null);

  const schedulePerson = async () => {
    setLoading(true);

    try {
      const request = await fetch(`${API_ROUTE}/person`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          person,
          name,
          doctype,
          doc,
          facultie,
          asunt,
          color,
          date,
          start,
          end,
          status,
        }),
      });
      const { ok, error } = await request.json();

      if (error) return toast.warn(error);

      setPerson("unset");
      setDoc("");
      setDoctype("unset");
      setName("");
      setFacultie("unset");
      setAsunt("");
      toast.success(ok, { position: "top-left" });
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  const editPerson = async () => {
    setLoading(true);

    try {
      const request = await fetch(`${API_ROUTE}/person`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          person,
          name,
          doctype,
          doc,
          facultie,
          asunt,
        }),
      });
      const { ok, error } = await request.json();

      if (error) return toast.warn(error);

      setPerson("unset");
      setDoc("");
      setDoctype("unset");
      setName("");
      setFacultie("unset");
      setAsunt("");
      toast.success(ok, { position: "top-left" });
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getUserData = async () => {
    try {
      const request = await fetch(`${API_ROUTE}/person?id=${id}`);
      const {
        category_id,
        document_id,
        facultie_id,
        name,
        document_number,
        come_asunt,
      } = await request.json();
      setPerson(category_id);
      setDoctype(document_id);
      setFacultie(facultie_id);
      setName(name);
      setDoc(document_number);
      setAsunt(come_asunt);
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    id && getUserData();
  }, []);

  useEffect(() => {
    if (!deans || person !== "4") return;

    for (const { _id, dean, facultie_id } of deans) {
      if (_id === doc) {
        setDoctype(1);
        setName(dean);
        setFacultie(facultie_id);
        setDisabledAfterAutocomplete(true);
        facultieSelectRef.current.className = "form-control";
        toast.info("Se han completado los datos", { position: "top-left" });
        break;
      }
    }
  }, [doc]);

  return (
    <PeopleContext.Provider
      value={{
        disabledAll,
        setDisabledAll,
        disabledAfterAutocomplete,
        setDisabledAfterAutocomplete,
        loading,
        setLoading,
        person,
        setPerson,
        doctype,
        setDoctype,
        facultie,
        setFacultie,
        doc,
        setDoc,
        name,
        setName,
        asunt,
        setAsunt,
        color,
        setColor,
        date,
        setDate,
        setStart,
        setEnd,
        setStatus,
        facultieSelectRef,
        schedulePerson,
        editPerson,
        setDeans,
        eventId,
        setEventId,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
