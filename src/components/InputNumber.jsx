import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

export default ({ setNumber, inputValue, placeholder, labelInfo }) => (
  <FloatingFormCol12x x="4">
    <input
      onChange={(evt) => setNumber(evt.target.value)}
      value={inputValue}
      className="form-control"
      type="number"
      placeholder={placeholder}
      required
    />
    <Label labelInfo={labelInfo} />
  </FloatingFormCol12x>
);
