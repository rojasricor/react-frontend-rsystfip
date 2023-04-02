import FloatingFormCol12x from "./FloatingFormCol12x";

export default function InputDate({ labelInfo, setDate, inputValue }) {
  return (
    <FloatingFormCol12x x="2">
      <input
        onChange={(evt) => setDate(evt.target.value)}
        type="date"
        value={inputValue}
        className="form-control"
      />
      <label className="form-label">{labelInfo}</label>
    </FloatingFormCol12x>
  );
}
