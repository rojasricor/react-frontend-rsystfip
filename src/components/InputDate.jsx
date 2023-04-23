import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

const InputDate = ({ labelInfo, setDate, inputValue }) => (
  <FloatingFormCol12x x="2">
    <input
      onChange={(evt) => setDate(evt.target.value)}
      type="date"
      value={inputValue}
      className="form-control"
    />
    <Label labelInfo={labelInfo} />
  </FloatingFormCol12x>
);

export default InputDate;
