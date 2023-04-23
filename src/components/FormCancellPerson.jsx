import { useState, useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { API_ROUTE } from "../constants/api";
import TextareaCancelledAsunt from "./TextareaCancelledAsunt";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { FaTimes, FaCheck } from "react-icons/fa";

const FormCancellPerson = () => {
  const { eventId, date, loading, setLoading } = useContext(PeopleContext);

  const [cancelledAsunt, setCancelledAsunt] = useState("");

  const cancellPerson = async (evt) => {
    evt.preventDefault();
    setLoading(true);

    try {
      const request = await fetch(`${API_ROUTE}/person`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: eventId,
          date,
          cancelled_asunt: cancelledAsunt,
        }),
      });
      const { ok, error } = await request.json();

      if (error) return toast.warn(error);

      toast.success(ok, { position: "top-left" });
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={cancellPerson} className="row g-2 my-2">
      <TextareaCancelledAsunt setCancelledAsunt={setCancelledAsunt} />
      <div className="modal-footer">
        <button className="btn btn-light border" data-bs-dismiss="modal">
          No <FaTimes className="mb-1" />
        </button>
        <button
          onClick={cancellPerson}
          className="btn btn-danger"
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
    </form>
  );
};

export default FormCancellPerson;
