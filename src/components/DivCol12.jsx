export default ({ children, x = 12 }) => (
  <div className={`col-md-${x}`}>{children}</div>
);
