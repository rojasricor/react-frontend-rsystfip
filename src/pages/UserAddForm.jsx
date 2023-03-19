import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaCheckDouble } from "react-icons/fa";
import { API_ROUTE, RESOURCES_ROUTE, UNSET_STATUS } from "../utils/constants";
import Spinner from "../components/Spinner";

export default function UserAddForm() {
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
    document.title = "RSystfip | Register new user";
    fetch(`${RESOURCES_ROUTE}?resource=documents`)
      .then((request) => request.json())
      .then((data) => setDocuments(data));
  }, []);

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card card-body">
          <h1 className="h3 text-center">Registrar usuario nuevo</h1>
          <form onSubmit={addUser} className="row g-3 mt-2">
            <div className="col-md-4">
              <div className="form-floating">
                <select
                  onChange={(evt) => setRole(evt.target.value)}
                  value={role}
                  className="form-select"
                  required
                >
                  <option value={UNSET_STATUS} disabled>
                    No seleccionado
                  </option>
                  <option value="2">Rector</option>
                  <option value="3">Secretaria</option>
                </select>
                <label className="form-label">Rol usuario:</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-floating">
                <input
                  onChange={(evt) => setName(evt.target.value)}
                  value={name}
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  maxLength="25"
                  spellCheck="false"
                  autoComplete="off"
                  required
                />
                <label className="form-label">Nombres:</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-floating">
                <input
                  onChange={(evt) => setLastname(evt.target.value)}
                  value={lastname}
                  className="form-control"
                  type="text"
                  placeholder="Lastname"
                  maxLength="25"
                  spellCheck="false"
                  autoComplete="off"
                  required
                />
                <label className="form-label">Apellidos:</label>
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-floating">
                <select
                  onChange={(evt) => setDocType(evt.target.value)}
                  value={docType}
                  className="form-select mr-sm-2"
                  required
                >
                  <option value={UNSET_STATUS} disabled>
                    No seleccionado
                  </option>
                  {documents.map((document, index) => {
                    return (
                      <option key={index} value={document.id}>
                        {document.description}
                      </option>
                    );
                  })}
                </select>
                <label className="form-label">Tipo de Documento:</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-floating">
                <input
                  onChange={(evt) => setDoc(evt.target.value)}
                  value={doc}
                  className="form-control"
                  type="number"
                  placeholder="Document"
                  required
                />
                <label className="form-label">Documento:</label>
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-floating">
                <input
                  onChange={(evt) => setEmail(evt.target.value)}
                  value={email}
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  spellCheck="false"
                  autoComplete="off"
                  required
                />
                <label className="form-label">Correo institucional:</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-floating">
                <input
                  onChange={(evt) => setTel(evt.target.value)}
                  value={tel}
                  className="form-control"
                  type="number"
                  placeholder="Phone"
                  required
                />
                <label className="form-label">Número de celular:</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  onChange={(evt) => setPassword(evt.target.value)}
                  value={password}
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  required
                />
                <label className="form-label">Contraseña:</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  onChange={(evt) => setPasswordConfirmation(evt.target.value)}
                  value={passwordConfirmation}
                  className="form-control"
                  type="password"
                  placeholder="Confirm password"
                  autoComplete="off"
                  required
                />
                <label className="form-label">Confirmar contraseña:</label>
              </div>
            </div>
            <div className="col-12">
              <button
                className="w-100 btn btn-primary btn-lg mb-3"
                disabled={loading}
              >
                {!loading ? (
                  <>
                    Guardar <FaCheckDouble className="mb-1" />
                  </>
                ) : (
                  <Spinner tam="lg" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
