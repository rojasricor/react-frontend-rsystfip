import FormCancellPerson from "./FormCancellPerson";

const ModalCancellPersonConfirmation = ({ modalRef }) => (
  <div
    className="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex="-1"
    ref={modalRef}
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5">Cancelar cita</h1>
          <button className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          Estás seguro que deseas cancelar ésta cita?
          <FormCancellPerson />
        </div>
      </div>
    </div>
  </div>
);

export default ModalCancellPersonConfirmation;
