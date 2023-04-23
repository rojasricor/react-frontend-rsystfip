import { UNSET_STATUS } from "../constants";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

const SelectBasic = ({ children, setData, inputValue, labelInfo, x }) => (
  <FloatingFormCol12x x={x}>
    <select
      onChange={({ target: { value } }) => setData(value)}
      value={inputValue}
      className="form-select"
      required
    >
      <option value={UNSET_STATUS} disabled>
        No seleccionado
      </option>
      {children}
    </select>
    <Label labelInfo={labelInfo} />
  </FloatingFormCol12x>
);

export default SelectBasic;
