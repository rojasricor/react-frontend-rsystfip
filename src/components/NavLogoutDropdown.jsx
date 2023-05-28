import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetUserAuthenticated } from "../features/auth/authSlice";
import { BiLogOutCircle } from "react-icons/bi";

const NavLogoutDropdown = ({ avatar }) => {
  const authState = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logout = () => {
    if (!confirm(`${authState.name} estás seguro(a)que deseas cerrar sesión?`))
      return;

    dispatch(resetUserAuthenticated());
    navigate("/auth/login");
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        as="a"
        className="d-flex align-items-center mt-3 mt-lg-0 mb-2 mb-lg-0 link-dark text-decoration-none me-3"
      >
        <Image roundedCircle src={avatar} width="40" alt="Account" />
      </Dropdown.Toggle>

      <Dropdown.Menu align={{ lg: "end" }}>
        <NavLink to="/help/asks/frecuently" className="dropdown-item">
          FAQs
        </NavLink>
        <NavLink
          to={`/users/manage/password/${authState.id}/change`}
          className="dropdown-item"
        >
          Cambiar contraseña
        </NavLink>
        <Dropdown.Divider />
        <Button onClick={logout} className="dropdown-item">
          Cerrar sesión <BiLogOutCircle />
        </Button>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavLogoutDropdown;
