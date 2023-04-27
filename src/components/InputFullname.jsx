import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { FloatingLabel, FormControl } from "react-bootstrap";

const InputFullName = () => {
  const { disabledAll, disabledAfterAutocomplete, name, setName } =
    useContext(PeopleContext);

  return (
    <FloatingLabel label="Nombres y Apellidos:">
      <FormControl
        onChange={({ target: { value } }) => setName(value)}
        value={name}
        type="text"
        placeholder="Complete campo"
        title="Ingrese nombres y apellidos"
        maxLength="35"
        autoComplete="off"
        spellCheck="false"
        disabled={disabledAll || disabledAfterAutocomplete}
        required
      />
    </FloatingLabel>
  );
};

export default InputFullName;
