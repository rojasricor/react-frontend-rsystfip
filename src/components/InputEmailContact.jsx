import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { FloatingLabel, FormControl } from "react-bootstrap";

const InputEmailContact = () => {
  const { disabledAll, disabledAfterAutocomplete, emailContact, setEmailContact } =
    useContext(PeopleContext);

  return (
    <FloatingLabel label="Email de contacto:">
      <FormControl
        onChange={({ target: { value } }) => setEmailContact(value)}
        value={emailContact}
        type="email"
        placeholder="Complete campo"
        title="Ingrese el correo electrónico de contacto"
        autoComplete="off"
        spellCheck="false"
        disabled={disabledAll || disabledAfterAutocomplete}
        required
      />
    </FloatingLabel>
  );
};

export default InputEmailContact;
