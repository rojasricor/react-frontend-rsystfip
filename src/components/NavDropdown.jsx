import { useRef, useEffect } from "react";
import DropdownMenu from "./Dropdown";
import Dropdown from "bootstrap/js/dist/dropdown";

const NavDropdown = ({ children, title, description }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    new Dropdown(dropdownRef.current);
  }, []);

  return (
    <div className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        title={title}
        ref={dropdownRef}
      >
        {description}
      </a>
      <DropdownMenu>{children}</DropdownMenu>
    </div>
  );
};

export default NavDropdown;
