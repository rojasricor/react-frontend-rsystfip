import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { Form, Row, Col } from "react-bootstrap";
import SelectPerson from "./SelectPerson";
import SelectDocument from "./SelectDocument";
import SelectFaculties from "./SelectFaculties";
import InputFullname from "./InputFullname";
import TextareaAsunt from "./TextareaAsunt";
import FooterFormPeople from "./FooterFormPeople";
import Notify from "./Notify";
import SmallCaption from "./SmallCaption";

const FormPeople = ({ action }) => {
  const {
    setStatus,
    schedulePerson,
    editPerson,
    disabledAll,
    disabledAfterAutocomplete,
    doc,
    setDoc,
  } = useContext(PeopleContext);

  const isEdit = action === "edit";

  const doForPerson = (e) => {
    e.preventDefault();

    if (isEdit) return editPerson();

    setStatus("daily");
    schedulePerson();
  };

  return (
    <Form onSubmit={doForPerson}>
      <Row className="g-2">
        <Col md={6}>
          <SelectPerson />
        </Col>
        <Col md={6}>
          <Form.FloatingLabel label="Cédula:">
            <Form.Control
              onChange={({ target: { value } }) => setDoc(value)}
              value={doc}
              type="number"
              placeholder="Complete campo"
              title="El número de documento debe ser de 8 a 10 dígitos"
              disabled={disabledAll || disabledAfterAutocomplete}
              required
            />
          </Form.FloatingLabel>
        </Col>
        <Col md={6}>
          <SelectDocument />
        </Col>
        <Col md={6}>
          <InputFullname />
        </Col>
        <Col md={12}>
          <SelectFaculties />
        </Col>
        <Col md={12}>
          <TextareaAsunt />
        </Col>
        <Col md={12}>
          <FooterFormPeople isAllowed={isEdit} />
        </Col>

        <SmallCaption />
      </Row>
      <Notify />
    </Form>
  );
};

export default FormPeople;
