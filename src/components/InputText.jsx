export default function InputText({
  setText,
  inputValue,
  placeholder,
  labelInfo,
}) {
  return (
    <div className="form-floating">
      <input
        onChange={(evt) => setText(evt.target.value)}
        value={inputValue}
        className="form-control"
        type="text"
        placeholder={placeholder}
        maxLength="25"
        spellCheck="false"
        autoComplete="off"
        required
      />
      <label className="form-label">{labelInfo}</label>
    </div>
  );
}
