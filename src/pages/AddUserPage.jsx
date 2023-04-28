import { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import FormUserAdd from "../components/FormUserAdd";
import Notify from "../components/Notify";

const AddUserPage = () => {
  useEffect(() => {
    document.title = "RSystfip | New User";
  }, []);

  return (
    <Row>
      <Col md={6} className="mx-auto">
        <Card className="py-2">
          <h1 className="h3 text-center">Registrar usuario nuevo</h1>
          <Card.Body>
            <FormUserAdd />
          </Card.Body>
        </Card>
      </Col>
      <Notify />
    </Row>
  );
};

export default AddUserPage;
