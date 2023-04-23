import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

const InputText = ({ setText, inputValue, placeholder, labelInfo }) => (
  <FloatingFormCol12x x="4">
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
  </FloatingFormCol12x>
);

export default InputText;
