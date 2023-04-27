import { FloatingLabel, FormControl } from "react-bootstrap";

const InputText = ({ setText, inputValue, placeholder, labelInfo }) => (
  <FloatingLabel label={labelInfo}>
    <FormControl
      onChange={({ target: { value } }) => setText(value)}
      value={inputValue}
      type="text"
      placeholder={placeholder}
      maxLength="25"
      spellCheck="false"
      autoComplete="off"
      required
    />
  </FloatingLabel>
);

export default InputText;
