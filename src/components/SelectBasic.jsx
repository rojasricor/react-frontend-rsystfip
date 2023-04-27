import { FloatingLabel, FormSelect } from "react-bootstrap";
import { UNSET_STATUS } from "../constants";

const SelectBasic = ({ children, setData, inputValue, labelInfo }) => (
  <FloatingLabel label={labelInfo}>
    <FormSelect
      onChange={({ target: { value } }) => setData(value)}
      value={inputValue}
      required
    >
      <option value={UNSET_STATUS} disabled>
        No seleccionado
      </option>
      {children}
    </FormSelect>
  </FloatingLabel>
);

export default SelectBasic;
