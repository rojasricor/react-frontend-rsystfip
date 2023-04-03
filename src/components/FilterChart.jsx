import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

export default function FilterChart({ setTyChart }) {
  return (
    <FloatingFormCol12x x="2">
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
      <Label labelInfo="Gráfica:" />
    </FloatingFormCol12x>
  );
}
