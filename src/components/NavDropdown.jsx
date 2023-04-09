import { useRef, useEffect } from "react";
import DropdownMenu from "./Dropdown";
import Dropdown from "bootstrap/js/dist/dropdown";

export default function NavDropdown({ children, title, description, h6 }) {
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
      <DropdownMenu h6={h6}>{children}</DropdownMenu>
    </div>
  );
}
