import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";

export default function InputFullname() {
  const { disabledAll, disabledAfterAutocomplete, name, setName } =
    useContext(PeopleContext);

  return (
    <div className="col-md-6">
      <div className="form-floating">
        <input
          onChange={(evt) => setName(evt.target.value)}
          value={name}
          className="form-control"
          type="text"
          placeholder="Complete campo"
          title="Ingrese nombres y apellidos"
          maxLength="35"
          autoComplete="off"
          spellCheck="false"
          disabled={disabledAll || disabledAfterAutocomplete}
          required
        />
        <label className="form-label">Nombres y Apellidos:</label>
      </div>
    </div>
  );
}
