import { FloatingLabel, FormSelect } from "react-bootstrap";

const FilterChart = ({ setChartType }) => (
  <FloatingLabel label="Gráfica:">
    <FormSelect onChange={({ target: { value } }) => setChartType(value)}>
      <option value="bar">Barra Vertical</option>
      <option value="polarArea">Polar Area</option>
      <option value="line">Línea</option>
      <option value="pie">Torta</option>
      <option value="doughnut">Doughnut</option>
    </FormSelect>
  </FloatingLabel>
);

export default FilterChart;
