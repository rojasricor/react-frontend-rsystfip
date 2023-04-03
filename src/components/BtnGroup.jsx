export default function BtnGroup({ children, clAdds = "" }) {
  return <div className={`btn-group btn-group-sm${clAdds}`}>{children}</div>;
}
