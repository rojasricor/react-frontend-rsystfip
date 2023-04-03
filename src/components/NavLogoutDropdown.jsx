import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BsQuestionCircle } from "react-icons/bs";
import { BiKey, BiLogOutCircle } from "react-icons/bi";

export default function NavLogoutDropdown({ avatar }) {
  const { user, setUser, setUsername, setPassword } = useContext(AppContext);

  function logout() {
    if (!confirm(`${user.name} estás seguro(a)que deseas cerrar sesión?`)) {
      return;
    }

    setUser(null);
    setUsername("");
    setPassword("");
    <Navigate to="/auth/login" replace />;
  }

  return (
    <div className="dropdown">
      <a
        className="d-flex align-items-center mt-3 mt-lg-0 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle me-3"
        data-bs-toggle="dropdown"
      >
        <img src={avatar} className="rounded-circle" width="40" alt="Account" />
      </a>
      <ul className="dropdown-menu dropdown-menu-lg-end text-small rounded-3 border shadow">
        <li>
          <NavLink to="/help/asks/frecuently" className="dropdown-item">
            FAQS <BsQuestionCircle className="mb-1" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/users/manage/password/${user.id}/change`}
            className="dropdown-item"
          >
            Change password <BiKey className="mb-1" />
          </NavLink>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button onClick={logout} className="dropdown-item">
            Logout <BiLogOutCircle />
          </button>
        </li>
      </ul>
    </div>
  );
}
