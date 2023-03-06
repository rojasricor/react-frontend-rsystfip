import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import { API_ROUTE } from "../utils/constants";
import { FaSignInAlt } from "react-icons/fa";
import Spinner from "../components/Spinner";

export default function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { doLogin } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "RSystfip | Auth";
  }, []);

  async function authenticate(evt) {
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

      if (auth) {
        doLogin(user);
        navigate("/home/welcome");
      } else {
        toast.error(error);
      }
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="row">
      <div className="col-md-4 mx-auto">
        <div className="card card-body rounded-4">
          <form onSubmit={authenticate} className="container">
            <div className="text-center mt-2">
              <img
                onClick={() => setPasswordVisible(!passwordVisible)}
                src="/rsystfip.svg"
                width="72"
                height="57"
                alt="rsystfip"
              />
              <h1 className="h6 mt-3">RSYSTFIP</h1>
              <span>
                Software para agendamiento de visitas Rectoría -{" "}
                <strong>ITFIP</strong>
              </span>
              <p className="text-muted">
                Instituto Tolimense de Formación Técnica Profesional ; NIT:
                800.173.719.0. Calle 18 Carrera 1ª Barrio/Arkabal Espinal,
                Tolima - Colombia
              </p>
            </div>
            <div className="form-floating mb-2">
              <input
                onChange={(evt) => setUsername(evt.target.value)}
                value={username}
                className="form-control"
                type="text"
                placeholder="Usuario"
                autoComplete="off"
                spellCheck="false"
                autoFocus
                required
              />
              <label className="form-label fw-bold">Nombre de usuario</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(evt) => setPassword(evt.target.value)}
                value={password}
                type={passwordVisible ? "text" : "password"}
                className="form-control"
                placeholder="Contraseña"
                autoComplete="off"
                required
              />
              <label className="form-label fw-bold">Contraseña</label>
            </div>
            <ToastContainer />
            <button
              className="w-100 btn btn-primary btn-lg mb-3"
              disabled={loading}
            >
              {!loading ? (
                <>
                  Entrar <FaSignInAlt className="mb-1" />
                </>
              ) : (
                <Spinner tam="lg" />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
