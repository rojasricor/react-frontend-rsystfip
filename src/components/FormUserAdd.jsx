import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { API_ROUTE, RESOURCE_ROUTE, UNSET_STATUS } from "../constants/api";
import DivRow from "./DivRow";
import SelectBasic from "./SelectBasic";
import InputText from "./InputText";
import InputEmail from "./InputEmail";
import InputNumber from "./InputNumber";
import InputPassword from "./InputPassword";
import Submitter from "./Submitter";
import Spinner from "./Spinner";
import { FaUserPlus } from "react-icons/fa";

export default function FormUserAdd() {
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

  async function doCreateUser(evt) {
    evt.preventDefault();
    setLoading(true);

    try {
      const request = await fetch(`${API_ROUTE}/user`, {
        method: "POST",
        headers: { "Content-Type": "application/javascript" },
        body: JSON.stringify({
          role,
          name,
          lastname,
          docType,
          doc,
          email,
          tel,
          password,
          passwordConfirmation,
        }),
      });
      const { error, ok } = await request.json();

      if (error) {
        return toast.warn(`${error} 🤯`);
      }

      setRole(UNSET_STATUS);
      setName("");
      setLastname("");
      setDocType(UNSET_STATUS);
      setDoc("");
      setEmail("");
      setTel("");
      setPassword("");
      setPasswordConfirmation("");
      toast.success(`${ok} 👌`, { position: "top-left" });
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch(`${RESOURCE_ROUTE}?resource=documents`)
      .then((request) => request.json())
      .then((data) => setDocuments(data));
  }, []);

  return (
    <form onSubmit={doCreateUser}>
      <DivRow clAdds=" mt-2">
        <SelectBasic
          setData={setRole}
          inputValue={role}
          labelInfo="Rol usuario:"
          x="4"
        >
          <option value="2">Rector</option>
          <option value="3">Secretaria</option>
        </SelectBasic>

        <InputText
          setText={setName}
          inputValue={name}
          placeholder="Name"
          labelInfo="Nombres:"
        />

        <InputText
          setText={setLastname}
          inputValue={lastname}
          placeholder="Lastname"
          labelInfo="Apellidos:"
        />

        <SelectBasic
          setData={setDocType}
          inputValue={docType}
          labelInfo="Tipo de Documento:"
          x="8"
        >
          {documents.map((document, index) => (
            <option key={index} value={document.id}>
              {document.description}
            </option>
          ))}
        </SelectBasic>

        <InputNumber
          setNumber={setDoc}
          inputValue={doc}
          placeholder="Document"
          labelInfo="Documento:"
        />

        <InputEmail
          setEmail={setEmail}
          inputValue={email}
          labelInfo="Correo institucional:"
        />

        <InputNumber
          setNumber={setTel}
          inputValue={tel}
          placeholder="Phone"
          labelInfo="Número de celular:"
        />

        <InputPassword
          setPassword={setPassword}
          inputValue={password}
          placeholder="Password"
          labelInfo="Contraseña:"
          x="6"
        />

        <InputPassword
          setPassword={setPasswordConfirmation}
          inputValue={passwordConfirmation}
          placeholder="Confirm password"
          labelInfo="Confirmar contraseña:"
          x="6"
        />

        <Submitter loading={loading}>
          {!loading ? (
            <>
              Registrar <FaUserPlus />
            </>
          ) : (
            <Spinner tam="lg" />
          )}
        </Submitter>
      </DivRow>
    </form>
  );
}
