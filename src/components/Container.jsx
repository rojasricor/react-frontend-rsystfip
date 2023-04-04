export default ({ children, clAdds = "" }) => (
  <div className={`container${clAdds}`}>{children}</div>
);
