import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { Form, Row, Col } from "react-bootstrap";
import SelectPerson from "./SelectPerson";
import SelectDocument from "./SelectDocument";
import SelectFaculties from "./SelectFaculties";
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
    name,
    setName,
    asunt,
    setAsunt,
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
          <Form.FloatingLabel label="Nombres y Apellidos:">
            <Form.Control
              onChange={({ target: { value } }) => setName(value)}
              value={name}
              type="text"
              placeholder="Complete campo"
              title="Ingrese nombres y apellidos"
              maxLength="35"
              autoComplete="off"
              spellCheck="false"
              disabled={disabledAll || disabledAfterAutocomplete}
              required
            />
          </Form.FloatingLabel>
        </Col>
        <Col md={12}>
          <SelectFaculties />
        </Col>
        <Col md={12}>
          <Form.FloatingLabel label="Asunto:">
            <Form.Control
              as="textarea"
              onChange={({ target: { value } }) => setAsunt(value)}
              value={asunt}
              placeholder="Complete campo"
              minLength="5"
              maxLength="100"
              spellCheck="false"
              autoComplete="off"
              disabled={disabledAll}
              style={{ height: "100px" }}
              required
            />
          </Form.FloatingLabel>
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
