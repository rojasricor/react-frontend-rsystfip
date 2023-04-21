import { useState, useEffect } from "react";
import { UNSET_STATUS, RESOURCE_ROUTE } from "../constants/api";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

export default function FilterSelectPerson({ setCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${RESOURCE_ROUTE}?resource=categories`)
      .then((request) => request.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <FloatingFormCol12x x="2">
      <select
        onChange={(evt) => setCategory(evt.target.value)}
        className="form-select"
      >
        <option value={UNSET_STATUS}>No seleccionado</option>
        {categories.map((category, index) => (
          <option key={index} value={category.id}>
            {category.category}
          </option>
        ))}
      </select>
      <Label labelInfo="Persona:" />
    </FloatingFormCol12x>
  );
}
