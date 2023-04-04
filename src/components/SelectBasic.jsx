import { UNSET_STATUS } from "../constants/api";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

export default function SelectBasic({
  children,
  setData,
  inputValue,
  labelInfo,
  x,
}) {
  return (
    <FloatingFormCol12x x={x}>
      <select
        onChange={(evt) => setData(evt.target.value)}
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
}
