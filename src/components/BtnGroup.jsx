const BtnGroup = ({ children, clAdds = "" }) => (
  <div className={`btn-group${clAdds}`}>{children}</div>
);

export default BtnGroup;
