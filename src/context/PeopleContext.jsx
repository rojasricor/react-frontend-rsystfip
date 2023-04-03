import { createContext, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UNSET_STATUS, API_ROUTE } from "../utils/constants";
import { formatTodaysDate, formatTodaysDateTime } from "../utils/resources";

export const PeopleContext = createContext();

export function PeopleContextProvider({ children }) {
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

  async function schedulePerson() {
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
      if (ok) {
        setPerson("unset");
        setDoc("");
        setDoctype("unset");
        setName("");
        setFacultie("unset");
        setAsunt("");
        toast(ok, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return true;
      }
      toast.error(error);
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function editPerson() {
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
      if (ok) {
        setPerson("unset");
        setDoc("");
        setDoctype("unset");
        setName("");
        setFacultie("unset");
        setAsunt("");
        return toast(ok, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      toast.error(error);
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function getUserData() {
    const request = await fetch(`${API_ROUTE}/person?id=${id}`);
    const { person_type, id_doc, facultad, name, num_doc, text_asunt } =
      await request.json();
    setPerson(person_type);
    setDoctype(id_doc);
    setFacultie(facultad);
    setName(name);
    setDoc(num_doc);
    setAsunt(text_asunt);
  }

  useEffect(() => {
    id && getUserData();
  }, []);

  useEffect(() => {
    if (!deans || person !== "4") {
      return;
    }

    for (const dean of deans) {
      if (dean.cc === doc) {
        setDoctype(1);
        setName(dean.name);
        setFacultie(dean.facultie);
        setDisabledAfterAutocomplete(true);
        facultieSelectRef.current.className = "form-control";
        toast("Datos autocompletados automáticamente", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
}
