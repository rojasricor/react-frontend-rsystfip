import { FloatingLabel, FormControl } from "react-bootstrap";

const inputEmail = ({ setEmail, inputValue, labelInfo }) => (
  <FloatingLabel label={labelInfo}>
    <FormControl
      onChange={({ target: { value } }) => setEmail(value)}
      value={inputValue}
      type="email"
      placeholder="Email"
      spellCheck="false"
      autoComplete="off"
      required
    />
  </FloatingLabel>
);

export default inputEmail;
