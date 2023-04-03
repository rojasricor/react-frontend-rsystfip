import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

export default function InputDate({ labelInfo, setDate, inputValue }) {
  return (
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
}
