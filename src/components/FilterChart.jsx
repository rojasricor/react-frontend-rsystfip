import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

const FilterChart = ({ setChartType }) => (
  <FloatingFormCol12x x="2">
    <select
      onChange={({ target: { value } }) => setChartType(value)}
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

export default FilterChart;
