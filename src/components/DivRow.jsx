export default ({ children, clAdds = "" }) => (
  <div className={`row g-3${clAdds}`}>{children}</div>
);
