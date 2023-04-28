import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { Form, Row, Col } from "react-bootstrap";
import SelectPerson from "./SelectPerson";
import SelectDocument from "./SelectDocument";
import SelectFaculties from "./SelectFaculties";
import InputDocumentNumber from "./InputDocumentNumber";
import InputFullname from "./InputFullname";
import TextareaAsunt from "./TextareaAsunt";
import FooterFormPeople from "./FooterFormPeople";
import Notify from "./Notify";
import SmallCaption from "./SmallCaption";

const FormPeople = ({ action }) => {
  const { setStatus, schedulePerson, editPerson } = useContext(PeopleContext);

  const isEdit = action === "edit";

  const doForPerson = (evt) => {
    evt.preventDefault();

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
          <InputDocumentNumber />
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
