import { useState, useEffect } from "react";
import { UNSET_STATUS, RESOURCE_ROUTE } from "../constants";
import { FloatingLabel, FormSelect } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const FilterSelectPerson = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);

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
    <FloatingLabel label="Persona:">
      <FormSelect onChange={({ target: { value } }) => setCategory(value)}>
        <option value={UNSET_STATUS}>No seleccionado</option>
        {categories.map(({ id, category }, index) => (
          <option key={index} value={id}>
            {category}
          </option>
        ))}
      </FormSelect>
    </FloatingLabel>
  );
};

export default FilterSelectPerson;
