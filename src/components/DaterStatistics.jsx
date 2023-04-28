import InputDate from "./InputDate";
import FilterChart from "./FilterChart";
import { Col } from "react-bootstrap";

const DaterStatistics = ({ setStart, start, setEnd, end, setChartType }) => (
  <>
    <Col md={2}>
      <InputDate labelInfo="Desde:" setDate={setStart} inputValue={start} />
    </Col>

    <Col md={2}>
      <InputDate labelInfo="Hasta:" setDate={setEnd} inputValue={end} />
    </Col>

    <Col md={2}>
      <FilterChart setChartType={setChartType} />
    </Col>
  </>
);

export default DaterStatistics;
