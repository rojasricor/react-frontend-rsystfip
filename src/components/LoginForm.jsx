import Spinner from "../components/Spinner";
import { IoMdLogIn } from "react-icons/io";

export default function LoginForm({
  authenticate,
  setUsername,
  username,
  setPassword,
  password,
  passwordVisible,
  loading,
}) {
  return (
    <form onSubmit={authenticate} className="container">
      <div className="form-floating mb-2">
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
        <label className="form-label fw-bold">Nombre de usuario</label>
      </div>
      <div className="form-floating mb-3">
        <input
          onChange={(evt) => setPassword(evt.target.value)}
          value={password}
          type={passwordVisible ? "text" : "password"}
          className="form-control border-0 border-bottom rounded-top-0"
          placeholder="Contraseña"
          autoComplete="off"
          required
        />
        <label className="form-label fw-bold">Contraseña</label>
      </div>
      <button className="w-100 btn btn-primary btn-lg mb-3" disabled={loading}>
        {!loading ? (
          <>
            Entrar <IoMdLogIn className="mb-1" />
          </>
        ) : (
          <Spinner tam="lg" />
        )}
      </button>
    </form>
  );
}
