import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PeopleContext } from "../context/PeopleContext";
import { Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { API_ROUTE } from "../constants";
import { toast } from "react-toastify";
import SelectPerson from "./SelectPerson";
import SelectDocument from "./SelectDocument";
import SelectFaculties from "./SelectFaculties";
import FooterFormPeople from "./FooterFormPeople";
import Notify from "./Notify";
import SmallCaption from "./SmallCaption";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormData,
  setIsLoading,
  resetFormDataProgramming,
} from "../features/programming/programmingSlice";

const FormPeople = ({ action }) => {
  const { id } = useParams();

  const { schedulePerson, handleChange } = useContext(PeopleContext);

  const dispatch = useDispatch();

  const formDataState = useSelector(({ programming }) => programming.formData);

  const editPerson = async () => {
    dispatch(setIsLoading(true));

    try {
      const {
        data: { ok, error },
      } = await axios.put(`${API_ROUTE}/person`, {
        id,
        person: formDataState.person,
        name: formDataState.name,
        doctype: formDataState.doctype,
        doc: formDataState.doc,
        facultie: formDataState.facultie,
        asunt: formDataState.asunt,
      });

      if (error || !ok) return toast.warn(error);

      dispatch(resetFormDataProgramming());

      toast.success(ok, { position: "top-left" });
    } catch ({ message }) {
      toast.error(message);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const doForPerson = (e) => {
    e.preventDefault();

    if (action === "edit") return editPerson();

    dispatch(
      setFormData({
        ...formDataState,
        status: "daily",
      })
    );
    schedulePerson();
  };

  const getUserData = async () => {
    try {
      const {
        data: {
          category_id,
          document_id,
          facultie_id,
          name,
          document_number,
          come_asunt,
        },
      } = await axios(`${API_ROUTE}/person?id=${id}`);

      dispatch(
        setFormData({
          ...formDataState,
          person: category_id,
          doctype: document_id,
          facultie: facultie_id,
          name,
          doc: document_number,
          asunt: come_asunt,
        })
      );
    } catch ({ message }) {
      toast.error(message);
    }
  };

  useEffect(() => {
    id && getUserData();
  }, []);

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

        <FooterFormPeople isAllowed={action === "edit"} />

        <SmallCaption />
      </Row>
      <Notify />
    </Form>
  );
};

export default FormPeople;
