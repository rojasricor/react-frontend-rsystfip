import { useState, useEffect } from "react";
import { UNSET_STATUS, RESOURCE_ROUTE } from "../constants/api";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

const FilterSelectPerson = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const request = await fetch(`${RESOURCE_ROUTE}?resource=categories`);
    const data = await request.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <FloatingFormCol12x x="2">
      <select
        onChange={(evt) => setCategory(evt.target.value)}
        className="form-select"
      >
        <option value={UNSET_STATUS}>No seleccionado</option>
        {categories.map(({ id, category }, index) => (
          <option key={index} value={id}>
            {category}
          </option>
        ))}
      </select>
      <Label labelInfo="Persona:" />
    </FloatingFormCol12x>
  );
};

export default FilterSelectPerson;
