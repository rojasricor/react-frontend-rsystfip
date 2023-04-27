import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { FormControl, FloatingLabel } from "react-bootstrap";

const InputDocumentNumber = () => {
  const { disabledAll, disabledAfterAutocomplete, doc, setDoc } =
    useContext(PeopleContext);

  return (
    <FloatingLabel label="Cédula:">
      <FormControl
        onChange={({ target: { value } }) => setDoc(value)}
        value={doc}
        type="number"
        placeholder="Complete campo"
        title="El número de documento debe ser de 8 a 10 dígitos"
        disabled={disabledAll || disabledAfterAutocomplete}
        required
      />
    </FloatingLabel>
  );
};

export default InputDocumentNumber;
