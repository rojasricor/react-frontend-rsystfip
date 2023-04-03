import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import Spinner from "./Spinner";
import { FaTimes, FaCheck } from "react-icons/fa";

export default function ModalCancellPersonConfirmation() {
  const { cancellPerson, loading } = useContext(PeopleContext);

  return (
    <div
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      id="modal-confirm-cancell"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Cancelar cita</h1>
            <button className="btn-close" data-bs-dismiss="modal" />
          </div>
          <div className="modal-body">
            Estás seguro que deseas cancelar ésta cita?
          </div>
          <div className="modal-footer">
            <button className="btn btn-light border" data-bs-dismiss="modal">
              No <FaTimes className="mb-1" />
            </button>
            <button
              onClick={cancellPerson}
              className="btn btn-danger border"
              data-bs-dismiss="modal"
              disabled={loading}
            >
              {!loading ? (
                <>
                  Sí, cancelar <FaCheck className="mb-1" />
                </>
              ) : (
                <Spinner tam="sm" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
