import Label from "./Label";

export default function InputNumber({
  setNumber,
  inputValue,
  placeholder,
  labelInfo,
}) {
  return (
    <>
      <input
        onChange={(evt) => setNumber(evt.target.value)}
        value={inputValue}
        className="form-control"
        type="number"
        placeholder={placeholder}
        required
      />
      <Label labelInfo={labelInfo} />
    </>
  );
}
