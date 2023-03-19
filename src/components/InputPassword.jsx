export default function InputPassword({
  setPassword,
  inputValue,
  placeholder,
  labelInfo,
}) {
  return (
    <div className="form-floating mb-3 mt-3">
      <input
        onChange={(evt) => setPassword(evt.target.value)}
        value={inputValue}
        className="form-control"
        type="password"
        placeholder={placeholder}
        autoComplete="off"
        required
      />
      <label className="form-label">{labelInfo}</label>
    </div>
  );
}
