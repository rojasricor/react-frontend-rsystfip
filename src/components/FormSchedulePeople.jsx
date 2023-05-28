import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { Form, Spinner, Col, Row, ModalFooter, Button } from "react-bootstrap";
import SelectPerson from "./SelectPerson";
import SelectDocument from "./SelectDocument";
import SelectFaculties from "./SelectFaculties";
import SmallCaption from "./SmallCaption";
import { IoCalendarNumber } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";

const FormSchedulePeople = ({ closeModalScheduling }) => {
  const {
    schedulePerson,
    loading,
    color,
    setColor,
    disabledAll,
    disabledAfterAutocomplete,
    doc,
    setDoc,
    emailContact,
    setEmailContact,
    telContact,
    setTelContact,
    name,
    setName,
    asunt,
    setAsunt,
  } = useContext(PeopleContext);

  const doSchedulePerson = (e) => {
    e.preventDefault();
    schedulePerson(closeModalScheduling);
  };

  return (
    <Form onSubmit={doSchedulePerson} className="mt-2 p-2">
      <Row className="g-3">
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
        <Col md={6}>
          <Form.FloatingLabel label="Teléfono de contacto:">
            <Form.Control
              onChange={({ target: { value } }) => setTelContact(value)}
              value={telContact}
              type="number"
              placeholder="Complete campo"
              title="Ingrese el teléfono de contacto, debe tener 10 dígitos"
              disabled={disabledAll || disabledAfterAutocomplete}
              required
            />
          </Form.FloatingLabel>
        </Col>
        <Col md={6}>
          <Form.FloatingLabel label="Email de contacto:">
            <Form.Control
              onChange={({ target: { value } }) => setEmailContact(value)}
              value={emailContact}
              type="email"
              placeholder="Complete campo"
              title="Ingrese el correo electrónico de contacto"
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
          <Col md={12}>
            <Form.Control
              onChange={({ target: { value } }) => setColor(value)}
              type="color"
              title="Choose your color"
              value={color}
            />
          </Col>
        </Col>

        <SmallCaption />

        <ModalFooter>
          <Button variant="light" onClick={closeModalScheduling}>
            Cerrar <GiReturnArrow className="mb-1" />
          </Button>
          <Button type="submit">
            {!loading ? (
              <>
                Agendar <IoCalendarNumber className="mb-1" />
              </>
            ) : (
              <Spinner size="sm" />
            )}
          </Button>
        </ModalFooter>
      </Row>
    </Form>
  );
};

export default FormSchedulePeople;
