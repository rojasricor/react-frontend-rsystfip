import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import { Card, Col, Row } from "react-bootstrap";
import FormPeople from "../components/FormPeople";

const PageEditPeople = () => {
  useEffect(() => {
    document.title = "Rsystfip | Edit people";
  }, []);

  return (
    <Row>
      <Col md={6} className="mx-auto">
        <Card className="py-2">
          <h1 className="h3 text-center">Actualizar Datos</h1>
          <Card.Body>
            <PeopleContextProvider>
              <FormPeople action="edit" />
            </PeopleContextProvider>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default PageEditPeople;
