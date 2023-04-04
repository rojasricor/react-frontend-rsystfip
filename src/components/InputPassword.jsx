import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

export default function InputPassword({
  setPassword,
  inputValue,
  placeholder,
  labelInfo,
  x,
}) {
  return (
    <FloatingFormCol12x x={x}>
      <input
        onChange={(evt) => setPassword(evt.target.value)}
        value={inputValue}
        className="form-control"
        type="password"
        placeholder={placeholder}
        autoComplete="off"
        required
      />
      <Label labelInfo={labelInfo} />
    </FloatingFormCol12x>
  );
}
