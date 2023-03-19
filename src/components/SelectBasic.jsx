import { UNSET_STATUS } from "../utils/constants";

export default function SelectBasic({
  children,
  setData,
  inputValue,
  labelInfo,
}) {
  return (
    <div className="form-floating">
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
      <label className="form-label">{labelInfo}</label>
    </div>
  );
}
