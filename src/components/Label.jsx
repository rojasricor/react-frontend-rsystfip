const Label = ({ labelInfo, clAdds = "" }) => (
  <label className={`form-label fw-bold${clAdds}`}>{labelInfo}</label>
);

export default Label;
