export default ({ children, clAdds = "" }) => (
  <div className={`container-fluid${clAdds}`}>{children}</div>
);
