import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import * as Cst from "../constants";
import { Row, Col, Form, Spinner } from "react-bootstrap";
import SelectBasic from "./SelectBasic";
import InputText from "./InputText";
import InputNumber from "./InputNumber";
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
          <SelectBasic
            setData={setRole}
            inputValue={role}
            labelInfo="Rol usuario:"
          >
            <option value="2">Rector</option>
            <option value="3">Secretaria</option>
          </SelectBasic>
        </Col>

        <Col md={4}>
          <InputText
            setText={setName}
            inputValue={name}
            placeholder="Name"
            labelInfo="Nombres:"
          />
        </Col>

        <Col md={4}>
          <InputText
            setText={setLastname}
            inputValue={lastname}
            placeholder="Lastname"
            labelInfo="Apellidos:"
          />
        </Col>

        <Col md={8}>
          <SelectBasic
            setData={setDocType}
            inputValue={docType}
            labelInfo="Tipo de Documento:"
          >
            {documents.map(({ id, description }, index) => (
              <option key={index} value={id}>
                {description}
              </option>
            ))}
          </SelectBasic>
        </Col>

        <Col md={4}>
          <InputNumber
            setNumber={setDoc}
            inputValue={doc}
            placeholder="Document"
            labelInfo="Documento:"
          />
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
          <InputNumber
            setNumber={setTel}
            inputValue={tel}
            placeholder="Phone"
            labelInfo="Número de celular:"
          />
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
