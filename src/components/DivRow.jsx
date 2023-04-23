const DivRow = ({ children, clAdds = "" }) => (
  <div className={`row g-3${clAdds}`}>{children}</div>
);

export default DivRow;
