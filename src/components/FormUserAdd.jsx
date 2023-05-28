import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import * as Cst from "../constants";
import { Row, Col, Form, Spinner } from "react-bootstrap";
import Submitter from "./Submitter";
import { FaUserPlus } from "react-icons/fa";

const FormUserAdd = () => {
  const { API_ROUTE, RESOURCE_ROUTE, UNSET_STATUS } = Cst;
  const [documents, setDocuments] = useState([]);
  const [role, setRole] = useState(UNSET_STATUS);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [docType, setDocType] = useState(UNSET_STATUS);
  const [doc, setDoc] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  const doCreateUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {
        data: { error, ok },
      } = await axios.post(`${API_ROUTE}/user`, {
        role,
        name,
        lastname,
        docType,
        doc,
        email,
        tel,
        password,
        passwordConfirmation,
      });

      if (error || !ok) return toast.warn(error);

      setRole(UNSET_STATUS);
      setName("");
      setLastname("");
      setDocType(UNSET_STATUS);
      setDoc("");
      setEmail("");
      setTel("");
      setPassword("");
      setPasswordConfirmation("");
      toast.success(ok, { position: "top-left" });
    } catch ({ message }) {
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const getDocuments = async () => {
    try {
      const { data } = await axios(`${RESOURCE_ROUTE}?resource=documents`);
      setDocuments(data);
    } catch ({ message }) {
      toast.error(message);
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <Form onSubmit={doCreateUser}>
      <Row className="g-2">
        <Col md={4}>
          <Form.FloatingLabel label="Rol usuario:">
            <Form.Select
              onChange={({ target: { value } }) => setRole(value)}
              value={role}
              required
            >
              <option value={UNSET_STATUS} disabled>
                No seleccionado
              </option>
              <option value="2">Rector</option>
              <option value="3">Secretaria</option>
            </Form.Select>
          </Form.FloatingLabel>
        </Col>

        <Col md={4}>
          <Form.FloatingLabel label="Nombres:">
            <Form.Control
              onChange={({ target: { value } }) => setName(value)}
              value={name}
              type="text"
              placeholder="Name"
              maxLength="25"
              spellCheck="false"
              autoComplete="off"
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Col md={4}>
          <Form.FloatingLabel label="Apellidos:">
            <Form.Control
              onChange={({ target: { value } }) => setLastname(value)}
              value={lastname}
              type="text"
              placeholder="Lastname"
              maxLength="25"
              spellCheck="false"
              autoComplete="off"
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Col md={8}>
          <Form.FloatingLabel label="Tipo de Documento:">
            <Form.Select
              onChange={({ target: { value } }) => setDocType(value)}
              value={docType}
              required
            >
              <option value={UNSET_STATUS} disabled>
                No seleccionado
              </option>
              {documents.map(({ id, description }, index) => (
                <option key={index} value={id}>
                  {description}
                </option>
              ))}
            </Form.Select>
          </Form.FloatingLabel>
        </Col>

        <Col md={4}>
          <Form.FloatingLabel label="Documento:">
            <Form.Control
              onChange={({ target: { value } }) => setDoc(value)}
              value={doc}
              type="number"
              placeholder="Document"
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Col md={8}>
          <Form.FloatingLabel label="Correo institucional:">
            <Form.Control
              onChange={({ target: { value } }) => setEmail(value)}
              value={email}
              type="email"
              placeholder="Email"
              spellCheck="false"
              autoComplete="off"
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Col md={4}>
          <Form.FloatingLabel label="Celular:">
            <Form.Control
              onChange={({ target: { value } }) => setTel(value)}
              value={tel}
              type="number"
              placeholder="Phone"
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Col md={6}>
          <Form.FloatingLabel label="Contraseña:">
            <Form.Control
              onChange={({ target: { value } }) => setPassword(value)}
              value={password}
              type="password"
              placeholder="Password"
              autoComplete="off"
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Col md={6}>
          <Form.FloatingLabel label="Confirmar contraseña:">
            <Form.Control
              onChange={({ target: { value } }) =>
                setPasswordConfirmation(value)
              }
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm password"
              autoComplete="off"
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Submitter loading={loading}>
          {!loading ? (
            <>
              Registrar <FaUserPlus className="mb-1" />
            </>
          ) : (
            <Spinner size="sm" />
          )}
        </Submitter>
      </Row>
    </Form>
  );
};

export default FormUserAdd;
