import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import * as Cst from "../constants";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";
import { toast } from "react-toastify";

const SelectPerson = () => {
  const { API_ROUTE, RESOURCE_ROUTE, UNSET_STATUS } = Cst;
  const {
    setDisabledAll,
    setDisabledAfterAutocomplete,
    setPerson,
    person,
    facultieSelectRef,
    setDeans,
  } = useContext(PeopleContext);
  const [categories, setCategories] = useState([]);

  const getDeans = async () => {
    try {
      const request = await fetch(`${API_ROUTE}/deans`);
      const data = await request.json();
      setDeans(data);
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    if (person !== UNSET_STATUS) {
      setDisabledAll(false);
      setDisabledAfterAutocomplete(false);
      facultieSelectRef.current.className = "form-select";
      facultieSelectRef.current.disabled = false;
      if (person === "5") facultieSelectRef.current.disabled = true;

      person === "4" && getDeans();
    }
  }, [person]);

  const getCategories = async () => {
    try {
      const request = await fetch(`${RESOURCE_ROUTE}?resource=categories`);
      const data = await request.json();
      setCategories(data);
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <FloatingFormCol12x x="6">
      <select
        onChange={({ target: { value } }) => setPerson(value)}
        value={person}
        className="form-select"
        required
      >
        <option value={UNSET_STATUS} disabled>
          No seleccionado
        </option>
        {categories.map(({ id, category }, index) => (
          <option key={index} value={id}>
            {category}
          </option>
        ))}
      </select>
      <Label labelInfo="Persona a registrar:" />
    </FloatingFormCol12x>
  );
};

export default SelectPerson;
