import Label from "./Label";

export default function InputText({
  setText,
  inputValue,
  placeholder,
  labelInfo,
}) {
  return (
    <>
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
      <Label labelInfo={labelInfo} />
    </>
  );
}
