export default function FilterChart({ setTyChart }) {
  return (
    <div className="col-md-2">
      <div className="form-floating">
        <select
          onChange={(evt) => setTyChart(evt.target.value)}
          className="form-select"
        >
          <option value="polarArea">Polar Area</option>
          <option value="bar">Barra Vertical</option>
          <option value="horizontalBar">Barra Horizontal</option>
          <option value="line">Línea</option>
          <option value="radar">Radar</option>
          <option value="pie">Pie</option>
          <option value="doughnut">Doughnut</option>
        </select>
        <label className="form-label">Gráfica:</label>
      </div>
    </div>
  );
}
