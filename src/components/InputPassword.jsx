export default function InputPassword({
  setPassword,
  inputValue,
  placeholder,
  labelInfo,
}) {
  return (
    <>
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
    </>
  );
}
