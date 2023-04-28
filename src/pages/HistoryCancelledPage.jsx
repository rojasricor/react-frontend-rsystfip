import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import TableCancelled from "../components/TableCancelled";
import Notify from "../components/Notify";

const HistoryCancelledPage = () => {
  useEffect(() => {
    document.title = "RSystfip | Cancelled History People";
  });

  return (
    <Row>
      <Col md={12}>
        <h1 className="h3">Citas canceladas</h1>
        <TableCancelled />
        <Notify />
      </Col>
    </Row>
  );
};

export default HistoryCancelledPage;
