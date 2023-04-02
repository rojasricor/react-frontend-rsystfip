import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import FloatingFormCol12x from "./FloatingFormCol12x";

export default function TextareaAsunt() {
  const { disabledAll, asunt, setAsunt } = useContext(PeopleContext);

  return (
    <FloatingFormCol12x>
      <textarea
        onChange={(evt) => setAsunt(evt.target.value)}
        value={asunt}
        className="form-control textarea-unresizable"
        placeholder="Complete campo"
        minLength="5"
        maxLength="100"
        spellCheck="false"
        autoComplete="off"
        disabled={disabledAll}
        required
      />
      <label className="form-label">Asunto:</label>
    </FloatingFormCol12x>
  );
}
