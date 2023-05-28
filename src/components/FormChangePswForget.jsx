import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { API_ROUTE } from "../constants";
import { Form, Row, Col, Spinner } from "react-bootstrap";
import Submitter from "./Submitter";
import { BiKey } from "react-icons/bi";

const FormChangePswForget = () => {
  const [password, setPassword] = useState("");
  const [password_confirm, setPassword_confirm] = useState("");
  const [loading, setLoading] = useState(false);

  const { resetToken, email } = useParams();

  const doChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {
        data: { error, ok },
      } = await axios.put(`${API_ROUTE}/recover/password`, {
        email,
        resetToken,
        password,
        password_confirm,
      });

      if (error || !ok) return toast.warn(error);

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
          <Form.FloatingLabel label="Contraseña nueva:">
            <Form.Control
              onChange={({ target: { value } }) => setPassword(value)}
              value={password}
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
              onChange={({ target: { value } }) => setPassword_confirm(value)}
              value={password_confirm}
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
              Cambiar contraseña <BiKey className="mb-1" />
            </>
          ) : (
            <Spinner size="sm" />
          )}
        </Submitter>
      </Row>
    </Form>
  );
};

export default FormChangePswForget;
