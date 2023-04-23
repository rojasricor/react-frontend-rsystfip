import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

const InputFullName = () => {
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
      <Label labelInfo="Nombres y Apellidos:" />
    </FloatingFormCol12x>
  );
};

export default InputFullName;
