import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { Form, Row, Col } from "react-bootstrap";
import SelectPerson from "./SelectPerson";
import SelectDocument from "./SelectDocument";
import SelectFaculties from "./SelectFaculties";
import FooterFormPeople from "./FooterFormPeople";
import Notify from "./Notify";
import SmallCaption from "./SmallCaption";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../features/programming/programmingSlice";

const FormPeople = ({ action }) => {
  const { handleChange, schedulePerson } = useContext(PeopleContext);

  const dispatch = useDispatch();

  const formDataState = useSelector(({ programming }) => programming.formData);

  const isEdit = action === "edit";

  const doForPerson = (e) => {
    e.preventDefault();

    if (isEdit) return editPerson();

    dispatch(
      setFormData({
        ...formDataState,
        status: "daily",
      })
    );
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
          <FooterFormPeople isAllowed={isEdit} />
        </Col>

        <SmallCaption />
      </Row>
      <Notify />
    </Form>
  );
};

export default FormPeople;
