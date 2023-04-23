import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

const TextareaAsunt = () => {
  const { disabledAll, asunt, setAsunt } = useContext(PeopleContext);

  return (
    <FloatingFormCol12x>
      <textarea
        onChange={({ target: { value } }) => setAsunt(value)}
        value={asunt}
        className="form-control"
        placeholder="Complete campo"
        minLength="5"
        maxLength="100"
        spellCheck="false"
        autoComplete="off"
        disabled={disabledAll}
        required
      />
      <Label labelInfo="Asunto:" />
    </FloatingFormCol12x>
  );
};

export default TextareaAsunt;
