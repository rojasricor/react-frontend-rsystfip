import InputDate from "./InputDate";
import FilterSelectPerson from "./FilterSelectPerson";
import FetcherReports from "./FetcherReports";
import { Col, Row } from "react-bootstrap";

const DaterReports = ({
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  setCategory,
  reportsFiltered,
}) => (
  <Row className="g-3 mb-5">
    <Col md={2}>
      <InputDate
        labelInfo="Desde:"
        setDate={setStartDate}
        inputValue={startDate}
      />
    </Col>

    <Col md={2}>
      <InputDate labelInfo="Hasta:" setDate={setEndDate} inputValue={endDate} />
    </Col>

    <Col md={2}>
      <FilterSelectPerson setCategory={setCategory} />
    </Col>

    <Col md={2}>
      <FetcherReports
        startDate={startDate}
        endDate={endDate}
        reportsFiltered={reportsFiltered}
      />
    </Col>
  </Row>
);

export default DaterReports;
