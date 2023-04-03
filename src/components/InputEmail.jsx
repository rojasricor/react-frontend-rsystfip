import Label from "./Label";

export default function InputEmail({ setEmail, inputValue, labelInfo }) {
  return (
    <>
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
      <Label labelInfo={labelInfo} />
    </>
  );
}
