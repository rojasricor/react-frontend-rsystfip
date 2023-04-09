import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { API_ROUTE } from "../constants/api";
import DivRow from "./DivRow";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";
import Submitter from "./Submitter";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { IoMdLogIn } from "react-icons/io";

export default function FormLogin() {
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

  async function doLogin(evt) {
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

      if (error || !auth) {
        return toast.warn(error);
      }

      setUser(user);
      navigate("/home/welcome");
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={doLogin}>
      <DivRow>
        <FloatingFormCol12x>
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
          <Label labelInfo="Nombre de usuario" />
        </FloatingFormCol12x>
        <FloatingFormCol12x>
          <input
            onChange={(evt) => setPassword(evt.target.value)}
            value={password}
            type={passwordVisible ? "text" : "password"}
            className="form-control"
            placeholder="Contraseña"
            autoComplete="off"
            required
          />
          <Label labelInfo="Contraseña" />
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
