import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

const InputPassword = ({
  setPassword,
  inputValue,
  placeholder,
  labelInfo,
  x,
}) => (
  <FloatingFormCol12x x={x}>
    <input
      onChange={({ target: { value } }) => setPassword(value)}
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

export default InputPassword;
