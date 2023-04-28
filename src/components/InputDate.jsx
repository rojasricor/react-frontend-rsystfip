import { FloatingLabel, FormControl } from "react-bootstrap";

const InputDate = ({ labelInfo, setDate, inputValue }) => (
  <FloatingLabel label={labelInfo}>
    <FormControl
      onChange={({ target: { value } }) => setDate(value)}
      type="date"
      value={inputValue}
    />
  </FloatingLabel>
);

export default InputDate;
