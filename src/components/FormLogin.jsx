import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { API_ROUTE } from "../constants";
import { Row, Col, Form, Spinner } from "react-bootstrap";
import Submitter from "./Submitter";
import axios from "axios";
import { toast } from "react-toastify";
import { IoMdLogIn } from "react-icons/io";

const FormLogin = () => {
  const {
    setUser,
    username,
    setUsername,
    password,
    setPassword,
    passwordVisible,
    setPasswordVisible,
  } = useContext(AppContext);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const doLogin = async (evt) => {
    evt.preventDefault();
    setLoading(true);

    try {
      const {
        data: { auth, user, error },
      } = await axios.post(`${API_ROUTE}/auth`, {
        username,
        password,
      });

      if (error || !auth) return toast.warn(error);

      setUser(user);
      navigate("/home/welcome");
    } catch ({ message }) {
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={doLogin}>
      <Row className="g-3">
        <Col md={12}>
          <Form.FloatingLabel label="Nombre de usuario">
            <Form.Control
              onChange={({ target: { value } }) => setUsername(value)}
              value={username}
              type="text"
              placeholder="Usuario"
              autoComplete="off"
              spellCheck="false"
              autoFocus
              required
            />
          </Form.FloatingLabel>
        </Col>
        <Col md={12}>
          <Form.FloatingLabel label="Contraseña">
            <Form.Control
              onChange={({ target: { value } }) => setPassword(value)}
              value={password}
              type={passwordVisible ? "text" : "password"}
              placeholder="Contraseña"
              autoComplete="off"
              required
            />
          </Form.FloatingLabel>
        </Col>
        <Col md={12}>
          <Form.Check
            onClick={() => setPasswordVisible(!passwordVisible)}
            type="switch"
            label="Mostrar contraseña"
          />
        </Col>
        <Submitter loading={loading}>
          {!loading ? (
            <>
              Entrar <IoMdLogIn className="mb-1" />
            </>
          ) : (
            <Spinner size="sm" />
          )}
        </Submitter>
      </Row>
    </Form>
  );
};

export default FormLogin;
