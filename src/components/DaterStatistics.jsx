import { Col, FloatingLabel, FormControl, FormSelect } from "react-bootstrap";

const DaterStatistics = ({ setStart, start, setEnd, end, setChartType }) => (
  <>
    <Col md={2}>
      <FloatingLabel label="Desde:">
        <FormControl
          onChange={({ target: { value } }) => setStart(value)}
          type="date"
          value={start}
        />
      </FloatingLabel>
    </Col>

    <Col md={2}>
      <FloatingLabel label="Hasta:">
        <FormControl
          onChange={({ target: { value } }) => setEnd(value)}
          type="date"
          value={end}
        />
      </FloatingLabel>
    </Col>

    <Col md={2}>
      <FloatingLabel label="Gráfica:">
        <FormSelect onChange={({ target: { value } }) => setChartType(value)}>
          <option value="bar">Barra Vertical</option>
          <option value="polarArea">Polar Area</option>
          <option value="line">Línea</option>
          <option value="pie">Torta</option>
          <option value="doughnut">Doughnut</option>
        </FormSelect>
      </FloatingLabel>
    </Col>
  </>
);

export default DaterStatistics;
