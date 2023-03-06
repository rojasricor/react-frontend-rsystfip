import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";

export default function TextareaAsunt() {
  const { disabledAll, asunt, setAsunt } = useContext(PeopleContext);

  return (
    <div className="col-12">
      <div className="form-floating mb-2">
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
    </div>
  );
}
