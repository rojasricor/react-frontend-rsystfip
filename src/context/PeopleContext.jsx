import { createContext, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_ROUTE } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLoading,
  setFormData,
  resetFormDataProgramming,
} from "../features/programming/programmingSlice";

export const PeopleContext = createContext();

export const PeopleContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  const formDataState = useSelector(({ programming }) => programming.formData);
  const deansState = useSelector(({ programming }) => programming.deans);

  // Ref to component select of facultie
  const facultieSelectRef = useRef(null);

  const handleChange = (e) => {
    dispatch(
      setFormData({
        ...formDataState,
        [e.target.name]: e.target.value,
      })
    );
  };

  const schedulePerson = async (closeModalScheduling) => {
    dispatch(setIsLoading(true));

    try {
      const {
        data: { ok, error },
      } = await axios.post(`${API_ROUTE}/person`, {
        person: formDataState.person,
        name: formDataState.name,
        doctype: formDataState.doctype,
        doc: formDataState.doc,
        emailContact:
          formDataState.emailContact === "" ? null : formDataState.emailContact,
        telContact:
          formDataState.telContact === "" ? null : formDataState.telContact,
        facultie: formDataState.facultie,
        asunt: formDataState.asunt,
        color: formDataState.color,
        date: formDataState.date,
        start: formDataState.start,
        end: formDataState.end,
        status: formDataState.status,
      });

      if (error || !ok) return toast.warn(error);

      dispatch(resetFormDataProgramming());

      if (formDataState.status === "scheduled") closeModalScheduling();

      toast.success(ok, { position: "top-left" });
    } catch ({ message }) {
      toast.error(message);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    if (!deansState || formDataState.person !== "4") return;

    for (const { _id, dean, facultie_id } of deansState) {
      if (_id === formDataState.doc) {
        dispatch(
          setFormData({
            ...formDataState,
            doctype: 1,
            name: dean,
            facultie: facultie_id,
            disabledAfterAutocomplete: true,
          })
        );

        facultieSelectRef.current.className = "form-control";
        toast.info("Se han completado los datos", { position: "top-left" });
        break;
      }
    }
  }, [formDataState.doc]);

  return (
    <PeopleContext.Provider
      value={{
        facultieSelectRef,
        schedulePerson,
        handleChange,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
