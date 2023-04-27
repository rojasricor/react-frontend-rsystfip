import { FloatingLabel, FormControl } from "react-bootstrap";

const InputNumber = ({ setNumber, inputValue, placeholder, labelInfo }) => (
  <FloatingLabel label={labelInfo}>
    <FormControl
      onChange={({ target: { value } }) => setNumber(value)}
      value={inputValue}
      type="number"
      placeholder={placeholder}
      required
    />
  </FloatingLabel>
);

export default InputNumber;
