import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_ROUTE } from "../constants";
import { Form, Row, Col, Spinner } from "react-bootstrap";
import InputPassword from "./InputPassword";
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
          <InputPassword
            setPassword={setCurrent_password}
            inputValue={current_password}
            placeholder="Current password"
            labelInfo="Contraseña anterior:"
          />
        </Col>

        <Col md={12}>
          <InputPassword
            setPassword={setNew_password}
            inputValue={new_password}
            placeholder="New password"
            labelInfo="Contraseña nueva:"
          />
        </Col>

        <Col md={12}>
          <InputPassword
            setPassword={setNew_password_confirm}
            inputValue={new_password_confirm}
            placeholder="Confirm new password"
            labelInfo="Confirmar contraseña nueva:"
          />
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
