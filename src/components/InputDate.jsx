export default function InputDate({ labelInfo, setDate, inputValue }) {
  return (
    <div className="col-md-2">
      <label className="form-label">{labelInfo}</label>
      <input
        onChange={(evt) => setDate(evt.target.value)}
        type="date"
        value={inputValue}
        className="form-control"
      />
    </div>
  );
}
