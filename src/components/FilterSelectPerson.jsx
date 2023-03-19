import { UNSET_STATUS } from "../utils/constants";

export default function FilterSelectPerson({ categories, setCategory }) {
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
