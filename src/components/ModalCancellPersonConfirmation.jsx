import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import Spinner from "./Spinner";
import { API_ROUTE } from "../constants/api";
import { toast } from "react-toastify";
import { FaTimes, FaCheck } from "react-icons/fa";

export default function ModalCancellPersonConfirmation({ modalRef }) {
  const { eventId, date, loading, setLoading } = useContext(PeopleContext);

  async function cancellPerson() {
    setLoading(true);

    try {
      const request = await fetch(`${API_ROUTE}/person`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: eventId,
          date,
        }),
      });
      const { ok, error } = await request.json();

      if (error) {
        return toast.warn(error);
      }

      toast.success(ok, { position: "top-left" });
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
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
