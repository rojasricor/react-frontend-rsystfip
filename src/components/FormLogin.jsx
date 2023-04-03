import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { API_ROUTE } from "../utils/constants";
import DivRow from "./DivRow";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Submitter from "./Submitter";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { IoMdLogIn } from "react-icons/io";

export default function FormLogin() {
  const {
    doLogin,
    passwordVisible,
    username,
    setUsername,
    password,
    setPassword,
  } = useContext(AppContext);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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
    <form onSubmit={authenticate}>
      <DivRow>
        <FloatingFormCol12x>
          <input
            onChange={(evt) => setUsername(evt.target.value)}
            value={username}
            className="form-control border-0 border-bottom rounded-bottom-0"
            type="text"
            placeholder="Usuario"
            autoComplete="off"
            spellCheck="false"
            autoFocus
            required
          />
          <label className="form-label fw-bold">Nombre de usuario
        </FloatingFormCol12x>
        <FloatingFormCol12x>
          <input
            onChange={(evt) => setPassword(evt.target.value)}
            value={password}
            type={passwordVisible ? "text" : "password"}
            className="form-control border-0 border-bottom rounded-top-0"
            placeholder="Contraseña"
            autoComplete="off"
            required
          />
          <label className="form-label fw-bold">Contraseña
        </FloatingFormCol12x>
        <Submitter loading={loading}>
          {!loading ? (
            <>
              Entrar <IoMdLogIn className="mb-1" />
            </>
          ) : (
            <Spinner tam="lg" />
          )}
        </Submitter>
      </DivRow>
    </form>
  );
}
