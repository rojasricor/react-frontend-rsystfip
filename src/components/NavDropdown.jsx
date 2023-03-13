export default function NavDropdown({ children, title, description, h6 }) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        title={title}
      >
        {description}
      </a>
      <div className="dropdown-menu gap-1 rounded-3 mx-0 border-0 shadow w-220px">
        <h6 className="dropdown-header">{h6}</h6>
        {children}
      </div>
    </li>
  );
}
