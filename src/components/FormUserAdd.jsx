import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { API_ROUTE, RESOURCES_ROUTE, UNSET_STATUS } from "../utils/constants";
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

  async function addUser(evt) {
    evt.preventDefault();
    setLoading(true);
    try {
      const request = await fetch(`${API_ROUTE}/save/user`, {
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

      if (ok) {
        setRole(UNSET_STATUS);
        setName("");
        setLastname("");
        setDocType(UNSET_STATUS);
        setDoc("");
        setEmail("");
        setTel("");
        setPassword("");
        setPasswordConfirmation("");

        return toast(ok, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return toast.error(error);
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch(`${RESOURCES_ROUTE}?resource=documents`)
      .then((request) => request.json())
      .then((data) => setDocuments(data));
  }, []);

  return (
    <form onSubmit={addUser} className="row g-3 mt-2">
      <div className="col-md-4">
        <SelectBasic
          setData={setRole}
          inputValue={role}
          labelInfo="Rol usuario:"
        >
          <option value="2">Rector</option>
          <option value="3">Secretaria</option>
        </SelectBasic>
      </div>

      <div className="col-md-4">
        <InputText
          setText={setName}
          inputValue={name}
          placeholder="Name"
          labelInfo="Nombres:"
        />
      </div>

      <div className="col-md-4">
        <InputText
          setText={setLastname}
          inputValue={lastname}
          placeholder="Lastname"
          labelInfo="Apellidos:"
        />
      </div>

      <div className="col-md-8">
        <SelectBasic
          setData={setDocType}
          inputValue={docType}
          labelInfo="Tipo de Documento:"
        >
          {documents.map((document, index) => (
            <option key={index} value={document.id}>
              {document.description}
            </option>
          ))}
        </SelectBasic>
      </div>

      <div className="col-md-4">
        <InputNumber
          setNumber={setDoc}
          inputValue={doc}
          placeholder="Document"
          labelInfo="Documento:"
        />
      </div>

      <div className="col-md-8">
        <InputEmail
          setEmail={setEmail}
          inputValue={email}
          labelInfo="Correo institucional:"
        />
      </div>

      <div className="col-md-4">
        <InputNumber
          setNumber={setTel}
          inputValue={tel}
          placeholder="Phone"
          labelInfo="Número de celular:"
        />
      </div>

      <div className="col-md-6">
        <InputPassword
          setPassword={setPassword}
          inputValue={password}
          placeholder="Password"
          labelInfo="Contraseña:"
        />
      </div>

      <div className="col-md-6">
        <InputPassword
          setPassword={setPasswordConfirmation}
          inputValue={passwordConfirmation}
          placeholder="Confirm password"
          labelInfo="Confirmar contraseña:"
        />
      </div>

      <Submitter loading={loading}>
        {!loading ? (
          <>
            Registrar <FaUserPlus />
          </>
        ) : (
          <Spinner tam="lg" />
        )}
      </Submitter>
    </form>
  );
}
