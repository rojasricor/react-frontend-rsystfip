import Dropdown from "./Dropdown";

export default ({ children, title, description, h6 }) => (
  <div className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      data-bs-toggle="dropdown"
      title={title}
    >
      {description}
    </a>
    <Dropdown h6={h6}>{children}</Dropdown>
  </div>
);
