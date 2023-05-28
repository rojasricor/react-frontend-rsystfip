import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ROUTE } from "../constants";
import { Row, Col, Form, Spinner } from "react-bootstrap";
import Submitter from "./Submitter";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthenticatedUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { IoMdLogIn } from "react-icons/io";

const FormLogin = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const doLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {
        data: { auth, user, error },
      } = await axios.post(`${API_ROUTE}/auth`, {
        username: formData.user,
        password: formData.password,
      });

      if (error || !auth) return toast.warn(error);

      dispatch(setAuthenticatedUser(user));
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
              name="user"
              onChange={handleChange}
              value={formData.user}
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
              name="password"
              onChange={handleChange}
              value={formData.password}
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
