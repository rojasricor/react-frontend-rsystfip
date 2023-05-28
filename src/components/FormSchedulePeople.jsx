import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { Form, Spinner, Col, Row, ModalFooter, Button } from "react-bootstrap";
import SelectPerson from "./SelectPerson";
import SelectDocument from "./SelectDocument";
import InputFullname from "./InputFullname";
import InputTelContact from "./InputTelContact";
import SelectFaculties from "./SelectFaculties";
import TextareaAsunt from "./TextareaAsunt";
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
          <InputFullname />
        </Col>
        <Col md={6}>
          <InputTelContact />
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
          <TextareaAsunt />
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
