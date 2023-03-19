import { useState, useEffect } from "react";
import { UNSET_STATUS, RESOURCES_ROUTE } from "../utils/constants";

export default function FilterSelectPerson({ setCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${RESOURCES_ROUTE}?resource=categories`)
      .then((request) => request.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="col-md-2">
      <label className="form-label">Persona:</label>
      <select
        onChange={(evt) => setCategory(evt.target.value)}
        className="form-select"
      >
        <option value={UNSET_STATUS}>No seleccionado</option>
        {categories.map((category, index) => (
          <option key={index} value={category.id}>
            {category.person}
          </option>
        ))}
      </select>
    </div>
  );
}
