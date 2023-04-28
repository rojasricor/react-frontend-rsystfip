import { Modal } from "react-bootstrap";
import FormSchedulePeople from "./FormSchedulePeople";

const ModalSchedulePeopleForm = ({
  stateModalScheduling,
  showModalScheduling,
  closeModalScheduling,
}) => (
  <Modal
    show={stateModalScheduling}
    onHide={closeModalScheduling}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Agendamiento Programado</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <FormSchedulePeople
        showModalScheduling={showModalScheduling}
        closeModalScheduling={closeModalScheduling}
      />
    </Modal.Body>
  </Modal>
);

export default ModalSchedulePeopleForm;
