import FilterChart from "./FilterChart";
import { Col, FloatingLabel, FormControl } from "react-bootstrap";

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
      <FilterChart setChartType={setChartType} />
    </Col>
  </>
);

export default DaterStatistics;
