import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

export default ({ setChartType }) => (
  <FloatingFormCol12x x="2">
    <select
      onChange={(evt) => setChartType(evt.target.value)}
      className="form-select"
    >
      <option value="bar">Barra Vertical</option>
      <option value="polarArea">Polar Area</option>
      <option value="line">Línea</option>
      <option value="pie">Torta</option>
      <option value="doughnut">Doughnut</option>
    </select>
    <Label labelInfo="Gráfica:" />
  </FloatingFormCol12x>
);
