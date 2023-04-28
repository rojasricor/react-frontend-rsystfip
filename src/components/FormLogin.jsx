import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { API_ROUTE } from "../constants";
import { Row, Col, Form, FloatingLabel, Spinner } from "react-bootstrap";
import Submitter from "./Submitter";
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
  } = useContext(AppContext);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const doLogin = async (evt) => {
    evt.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_ROUTE}/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const { auth, user, error } = await response.json();

      if (error || !auth) return toast.warn(error);

      setUser(user);
      navigate("/home/welcome");
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={doLogin}>
      <Row className="g-3">
        <Col md={12}>
          <FloatingLabel label="Nombre de usuario">
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
          </FloatingLabel>
        </Col>
        <Col md={12}>
          <FloatingLabel label="Contraseña">
            <Form.Control
              onChange={({ target: { value } }) => setPassword(value)}
              value={password}
              type={passwordVisible ? "text" : "password"}
              placeholder="Contraseña"
              autoComplete="off"
              required
            />
          </FloatingLabel>
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
