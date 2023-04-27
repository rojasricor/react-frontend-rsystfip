import { FloatingLabel, FormControl } from "react-bootstrap";

const InputPassword = ({ setPassword, inputValue, placeholder, labelInfo }) => (
  <FloatingLabel label={labelInfo}>
    <FormControl
      onChange={({ target: { value } }) => setPassword(value)}
      value={inputValue}
      type="password"
      placeholder={placeholder}
      autoComplete="off"
      required
    />
  </FloatingLabel>
);

export default InputPassword;
