import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import FormPeople from "../components/FormPeople";
import { Row, Col, Card } from "react-bootstrap";

const AddPeoplePage = () => {
  useEffect(() => {
    document.title = "RSystfip | Fast Scheduling";
  }, []);

  return (
    <Row>
      <Col md={6} className="mx-auto">
        <Card className="py-2">
          <h1 className="h3 text-center">Agendamiento diario</h1>
          <Card.Body>
            <PeopleContextProvider>
              <FormPeople action="add" />
            </PeopleContextProvider>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AddPeoplePage;
