import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

export default ({ setCancelledAsunt }) => (
  <FloatingFormCol12x>
    <textarea
      onChange={(evt) => setCancelledAsunt(evt.target.value)}
      className="form-control"
      placeholder="Complete campo"
      minLength="5"
      maxLength="100"
      spellCheck="false"
      autoComplete="off"
      required
    />
    <Label labelInfo="Asunto:" />
  </FloatingFormCol12x>
);
