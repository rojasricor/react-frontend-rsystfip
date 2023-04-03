import { UNSET_STATUS } from "../utils/api";
import Label from "./Label";

export default function SelectBasic({
  children,
  setData,
  inputValue,
  labelInfo,
}) {
  return (
    <>
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
    </>
  );
}
