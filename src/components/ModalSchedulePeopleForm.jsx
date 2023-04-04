import FormSchedulePeople from "./FormSchedulePeople";

export default () => (
  <div
    className="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex="-1"
    id="modal-scheduling"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5">Agendamiento Programado</h1>
          <button className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <FormSchedulePeople />
        </div>
      </div>
    </div>
  </div>
);
