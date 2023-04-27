import { Col, Button } from "react-bootstrap";

const Submitter = ({ children, loading }) => (
  <Col>
    <Button className="my-2" disabled={loading} type="submit">
      {children}
    </Button>
  </Col>
);

export default Submitter;
