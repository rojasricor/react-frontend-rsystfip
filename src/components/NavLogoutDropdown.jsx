import { useContext, useRef, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import Dropdown from "bootstrap/js/dist/dropdown";

const NavLogoutDropdown = ({ avatar }) => {
  const { user, setUser, setUsername, setPassword } = useContext(AppContext);

  const dropdownRef = useRef(null);

  useEffect(() => {
    new Dropdown(dropdownRef.current);
  }, []);

  const logout = () => {
    if (!confirm(`${user.name} estás seguro(a)que deseas cerrar sesión?`))
      return;

    setUser(null);
    setUsername("");
    setPassword("");
    <Navigate to="/auth/login" replace />;
  };

  return (
    <div className="dropdown">
      <a
        className="d-flex align-items-center mt-3 mt-lg-0 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle me-3"
        data-bs-toggle="dropdown"
        ref={dropdownRef}
      >
        <img src={avatar} className="rounded-circle" width="40" alt="Account" />
      </a>
      <ul className="dropdown-menu dropdown-menu-lg-end">
        <li>
          <NavLink to="/help/asks/frecuently" className="dropdown-item">
            FAQs
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/users/manage/password/${user.id}/change`}
            className="dropdown-item"
          >
            Cambiar contraseña
          </NavLink>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button onClick={logout} className="dropdown-item">
            Cerrar sesión <BiLogOutCircle />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavLogoutDropdown;
