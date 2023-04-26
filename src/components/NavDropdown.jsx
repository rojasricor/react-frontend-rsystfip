import { useRef, useEffect } from "react";
import Dropdown from "./bases/Dropdown";
import BsDropdown from "bootstrap/js/dist/dropdown";

const NavDropdown = ({ children, title, description }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    new BsDropdown(dropdownRef.current);
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
      <Dropdown>{children}</Dropdown>
    </div>
  );
};

export default NavDropdown;
