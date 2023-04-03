export default function Label({ labelInfo, clAdds = "" }) {
  return <label className={`form-label${clAdds}`}>{labelInfo};
}
