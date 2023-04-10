export default ({ children, h6 }) => (
  <div className="dropdown-menu gap-1 mx-0 border-0 shadow w-220px">
    <h6 className="dropdown-header">{h6}</h6>
    {children}
  </div>
);
