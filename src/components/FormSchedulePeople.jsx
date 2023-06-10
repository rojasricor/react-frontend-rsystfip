import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { Form, Spinner, Col, Row, ModalFooter, Button } from "react-bootstrap";
import SelectPerson from "./SelectPerson";
import SelectDocument from "./SelectDocument";
import SelectFaculties from "./SelectFaculties";
import SmallCaption from "./SmallCaption";
import { IoCalendarNumber } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { useSelector } from "react-redux";

const FormSchedulePeople = ({ closeModalScheduling }) => {
  const { schedulePerson, handleChange } = useContext(PeopleContext);

  const formDataState = useSelector(({ programming }) => programming.formData);
  const isLoadingState = useSelector(
    ({ programming }) => programming.isLoading
  );

  const doSchedulePerson = (e) => {
    e.preventDefault();
    schedulePerson(closeModalScheduling);
  };

  return (
    <Form onSubmit={doSchedulePerson}>
      <Row className="g-3">
        <Col md={6}>
          <SelectPerson />
        </Col>

        <Col md={6}>
          <Form.FloatingLabel label="Cédula:">
            <Form.Control
              name="doc"
              onChange={handleChange}
              value={formDataState.doc}
              type="number"
              placeholder="Complete campo"
              title="El número de documento debe ser de 8 a 10 dígitos"
              disabled={
                formDataState.disabledAll ||
                formDataState.disabledAfterAutocomplete
              }
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
              name="name"
              onChange={handleChange}
              value={formDataState.name}
              type="text"
              placeholder="Complete campo"
              title="Ingrese nombres y apellidos"
              maxLength="35"
              autoComplete="off"
              spellCheck="false"
              disabled={
                formDataState.disabledAll ||
                formDataState.disabledAfterAutocomplete
              }
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Col md={6}>
          <Form.FloatingLabel label="Teléfono de contacto:">
            <Form.Control
              name="telContact"
              onChange={handleChange}
              value={formDataState.telContact}
              type="number"
              placeholder="Complete campo"
              title="Ingrese el teléfono de contacto, debe tener 10 dígitos"
              disabled={
                formDataState.disabledAll ||
                formDataState.disabledAfterAutocomplete
              }
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Col md={6}>
          <Form.FloatingLabel label="Email de contacto:">
            <Form.Control
              name="emailContact"
              onChange={handleChange}
              value={formDataState.emailContact}
              type="email"
              placeholder="Complete campo"
              title="Ingrese el correo electrónico de contacto"
              autoComplete="off"
              spellCheck="false"
              disabled={
                formDataState.disabledAll ||
                formDataState.disabledAfterAutocomplete
              }
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
              name="asunt"
              onChange={handleChange}
              value={formDataState.asunt}
              placeholder="Complete campo"
              minLength="5"
              maxLength="100"
              spellCheck="false"
              autoComplete="off"
              disabled={formDataState.disabledAll}
              style={{ height: "100px" }}
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Col md={12}>
          <Form.Control
            name="color"
            onChange={handleChange}
            type="color"
            title="Choose your color"
            value={formDataState.color}
          />
        </Col>

        <SmallCaption />

        <ModalFooter>
          <Button variant="light" onClick={closeModalScheduling}>
            Cerrar <GiReturnArrow className="mb-1" />
          </Button>
          <Button type="submit">
            {!isLoadingState ? (
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
