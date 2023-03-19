export default function InputNumber({
  setNumber,
  inputValue,
  placeholder,
  labelInfo,
}) {
  return (
    <div className="form-floating">
      <input
        onChange={(evt) => setNumber(evt.target.value)}
        value={inputValue}
        className="form-control"
        type="number"
        placeholder={placeholder}
        required
      />
      <label className="form-label">{labelInfo}</label>
    </div>
  );
}
