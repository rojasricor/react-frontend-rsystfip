import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import * as Cst from "../constants";
import { Row, Col, Form, Spinner } from "react-bootstrap";
import Submitter from "./Submitter";
import { FaUserPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setDocuments } from "../features/resources/resourcesSlice";

const FormUserAdd = () => {
  const { API_ROUTE, RESOURCE_ROUTE, UNSET_STATUS } = Cst;
  const initialState = {
    role: UNSET_STATUS,
    name: "",
    lastname: "",
    docType: UNSET_STATUS,
    doc: "",
    email: "",
    tel: "",
    password: "",
    passwordConfirmation: "",
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  const documentsState = useSelector(({ resources }) => resources.documents);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const doCreateUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {
        data: { error, ok },
      } = await axios.post(`${API_ROUTE}/user`, {
        role: formData.role,
        name: formData.name,
        lastname: formData.lastname,
        docType: formData.docType,
        doc: formData.doc,
        email: formData.email,
        tel: formData.tel,
        password: formData.password,
        passwordConfirmation: formData.passwordConfirmation,
      });

      if (error || !ok) return toast.warn(error);

      setFormData(initialState);
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

      dispatch(setDocuments(data));
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
              name="role"
              onChange={handleChange}
              value={formData.role}
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
              name="name"
              onChange={handleChange}
              value={formData.name}
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
              name="lastname"
              onChange={handleChange}
              value={formData.lastname}
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
              name="docType"
              onChange={handleChange}
              value={formData.docType}
              required
            >
              <option value={UNSET_STATUS} disabled>
                No seleccionado
              </option>
              {documentsState.map(({ id, description }, index) => (
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
              name="doc"
              onChange={handleChange}
              value={formData.doc}
              type="number"
              placeholder="Document"
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Col md={8}>
          <Form.FloatingLabel label="Correo institucional:">
            <Form.Control
              name="email"
              onChange={handleChange}
              value={formData.email}
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
              name="tel"
              onChange={handleChange}
              value={formData.tel}
              type="number"
              placeholder="Phone"
              required
            />
          </Form.FloatingLabel>
        </Col>

        <Col md={6}>
          <Form.FloatingLabel label="Contraseña:">
            <Form.Control
              name="password"
              onChange={handleChange}
              value={formData.password}
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
              name="passwordConfirmation"
              onChange={handleChange}
              value={formData.passwordConfirmation}
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
