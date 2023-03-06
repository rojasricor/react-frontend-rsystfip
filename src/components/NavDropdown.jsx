import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";

export default function NavDropdown({ avatar }) {
  const { user, doLogout } = useContext(AppContext);

  function logout() {
    if (!confirm(`${user.name} estás seguro(a)que deseas cerrar sesión?`)) {
      return;
    }
    doLogout();
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div className="dropdown">
      <a
        className="d-flex align-items-center mt-3 mt-lg-0 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle me-3"
        data-bs-toggle="dropdown"
      >
        <img src={avatar} className="rounded-circle" width="40" alt="Account" />
      </a>
      <ul className="dropdown-menu dropdown-menu-lg-end text-small">
        <li>
          <NavLink to="/help/asks/frecuently" className="dropdown-item">
            Ayuda...
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/users/manage/password/${user.id}/change`}
            className="dropdown-item"
          >
            Cambiar mi contraseña
          </NavLink>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button onClick={logout} className="dropdown-item">
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
  );
}
