import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_ROUTE } from "../constants";
import { Form, Row, Col, Spinner } from "react-bootstrap";
import Submitter from "./Submitter";
import { BiKey } from "react-icons/bi";

const FormChangePsw = ({ userId }) => {
  const [current_password, setCurrent_password] = useState("");
  const [new_password, setNew_password] = useState("");
  const [new_password_confirm, setNew_password_confirm] = useState("");
  const [loading, setLoading] = useState(false);

  const doChangePassword = async (evt) => {
    evt.preventDefault();
    setLoading(true);

    try {
      const {
        data: { error, ok },
      } = await axios.put(`${API_ROUTE}/password`, {
        id: userId,
        current_password,
        new_password,
        new_password_confirm,
      });

      if (error || !ok) return toast.warn(error);

      setCurrent_password("");
      setNew_password("");
      setNew_password_confirm("");
      toast.success(ok, { position: "top-left" });
    } catch ({ message }) {
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={doChangePassword}>
      <Row className="g-3">
        <Col md={12}>
          <Form.FloatingLabel label="Contraseña anterior:">
            <Form.Control
              onChange={({ target: { value } }) => setCurrent_password(value)}
              value={current_password}
              type="password"
              placeholder="Current password"
              autoComplete="off"
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Col md={12}>
          <Form.FloatingLabel label="Contraseña nueva:">
            <Form.Control
              onChange={({ target: { value } }) => setNew_password(value)}
              value={new_password}
              type="password"
              placeholder="New password"
              autoComplete="off"
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Col md={12}>
          <Form.FloatingLabel label="Confirmar contraseña nueva:">
            <Form.Control
              onChange={({ target: { value } }) =>
                setNew_password_confirm(value)
              }
              value={new_password_confirm}
              type="password"
              placeholder="Confirm new password"
              autoComplete="off"
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Submitter loading={loading}>
          {!loading ? (
            <>
              Cambiar <BiKey className="mb-1" />
            </>
          ) : (
            <Spinner size="sm" />
          )}
        </Submitter>
      </Row>
    </Form>
  );
};

export default FormChangePsw;
