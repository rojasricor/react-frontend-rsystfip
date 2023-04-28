import { FloatingLabel, FormControl } from "react-bootstrap";

const TextareaCancelledAsunt = ({ setCancelledAsunt }) => (
  <FloatingLabel label="Asunto cancelamiento:">
    <FormControl
      as="textarea"
      onChange={({ target: { value } }) => setCancelledAsunt(value)}
      placeholder="Complete campo"
      minLength="5"
      maxLength="100"
      spellCheck="false"
      autoComplete="off"
      required
    />
  </FloatingLabel>
);

export default TextareaCancelledAsunt;
