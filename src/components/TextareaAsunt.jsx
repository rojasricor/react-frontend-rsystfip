import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import DivCol12 from "./DivCol12";

export default function TextareaAsunt() {
  const { disabledAll, asunt, setAsunt } = useContext(PeopleContext);

  return (
    <DivCol12>
      <div className="form-floating">
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
      </div>
    </DivCol12>
  );
}
