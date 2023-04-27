import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { FloatingLabel, FormControl } from "react-bootstrap";

const TextareaAsunt = () => {
  const { disabledAll, asunt, setAsunt } = useContext(PeopleContext);

  return (
    <FloatingLabel label="Asunto:">
      <FormControl
        as="textarea"
        onChange={({ target: { value } }) => setAsunt(value)}
        value={asunt}
        placeholder="Complete campo"
        minLength="5"
        maxLength="100"
        spellCheck="false"
        autoComplete="off"
        disabled={disabledAll}
        required
      />
    </FloatingLabel>
  );
};

export default TextareaAsunt;
