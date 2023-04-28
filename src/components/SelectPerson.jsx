import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import * as Cst from "../constants";
import { FloatingLabel, FormSelect } from "react-bootstrap";
import axios from "axios";
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
      const { data } = await axios(`${API_ROUTE}/deans`);
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
      const { data } = await axios(`${RESOURCE_ROUTE}?resource=categories`);
      setCategories(data);
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <FloatingLabel label="Persona a registrar:">
      <FormSelect
        onChange={({ target: { value } }) => setPerson(value)}
        value={person}
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
      </FormSelect>
    </FloatingLabel>
  );
};

export default SelectPerson;
