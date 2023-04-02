export default function InputDate({ labelInfo, setDate, inputValue }) {
  return (
    <div className="col-md-2">
      <div className="form-floating">
        <input
          onChange={(evt) => setDate(evt.target.value)}
          type="date"
          value={inputValue}
          className="form-control"
        />
        <label className="form-label">{labelInfo}</label>
      </div>
    </div>
  );
}
