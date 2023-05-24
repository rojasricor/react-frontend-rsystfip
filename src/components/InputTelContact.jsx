import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { FloatingLabel, FormControl } from "react-bootstrap";

const InputTelContact = () => {
  const { disabledAll, disabledAfterAutocomplete, telContact, setTelContact } =
    useContext(PeopleContext);

  return (
    <FloatingLabel label="Teléfono de contacto:">
      <FormControl
        onChange={({ target: { value } }) => setTelContact(value)}
        value={telContact}
        type="number"
        placeholder="Complete campo"
        title="Ingrese el teléfono de contacto, debe tener 10 dígitos"
        disabled={disabledAll || disabledAfterAutocomplete}
        required
      />
    </FloatingLabel>
  );
};

export default InputTelContact;
