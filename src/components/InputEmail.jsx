export default function InputEmail({ setEmail, inputValue, labelInfo }) {
  return (
    <div className="form-floating">
      <input
        onChange={(evt) => setEmail(evt.target.value)}
        value={inputValue}
        className="form-control"
        type="email"
        placeholder="Email"
        spellCheck="false"
        autoComplete="off"
        required
      />
      <label className="form-label">{labelInfo}</label>
    </div>
  );
}
