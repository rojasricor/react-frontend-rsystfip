import FilterSelectPerson from "./FilterSelectPerson";
import FetcherReports from "./FetcherReports";
import { Col, Row, FloatingLabel, FormControl } from "react-bootstrap";

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
      <FloatingLabel label="Desde:">
        <FormControl
          onChange={({ target: { value } }) => setStartDate(value)}
          type="date"
          value={startDate}
        />
      </FloatingLabel>
    </Col>

    <Col md={2}>
      <FloatingLabel label="Hasta:">
        <FormControl
          onChange={({ target: { value } }) => setEndDate(value)}
          type="date"
          value={endDate}
        />
      </FloatingLabel>
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
