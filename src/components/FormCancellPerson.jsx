import { useState, useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { API_ROUTE } from "../constants";
import { Form, Spinner, ModalFooter, Button, Row, Col } from "react-bootstrap";
import TextareaCancelledAsunt from "./TextareaCancelledAsunt";
import { toast } from "react-toastify";
import { FaTimes, FaCheck } from "react-icons/fa";

const FormCancellPerson = ({ closeModalCancell }) => {
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
      closeModalCancell();
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={cancellPerson}>
      <Row className="g-3 my-2">
        <Col md={12}>
          <TextareaCancelledAsunt setCancelledAsunt={setCancelledAsunt} />
        </Col>
        <ModalFooter>
          <Button onClick={closeModalCancell} variant="light">
            No <FaTimes className="mb-1" />
          </Button>
          <Button variant="danger" disabled={loading} type="submit">
            {!loading ? (
              <>
                Sí, cancelar <FaCheck className="mb-1" />
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

export default FormCancellPerson;
