import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import FloatingFormCol12x from "./FloatingFormCol12x";

export default function InputFullname() {
  const { disabledAll, disabledAfterAutocomplete, name, setName } =
    useContext(PeopleContext);

  return (
    <FloatingFormCol12x x="6">
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
    </FloatingFormCol12x>
  );
}
