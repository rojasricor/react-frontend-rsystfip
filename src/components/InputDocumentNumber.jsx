import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

const InputDocumentNumber = () => {
  const { disabledAll, disabledAfterAutocomplete, doc, setDoc } =
    useContext(PeopleContext);

  return (
    <FloatingFormCol12x x="6">
      <input
        onChange={({ target: { value } }) => setDoc(value)}
        value={doc}
        className="form-control"
        type="number"
        placeholder="Complete campo"
        title="El número de documento debe ser de 8 a 10 dígitos"
        disabled={disabledAll || disabledAfterAutocomplete}
        required
      />
      <Label labelInfo="Cédula:" />
    </FloatingFormCol12x>
  );
};

export default InputDocumentNumber;
