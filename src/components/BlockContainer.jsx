export default function BlockContainer({ children, clAdds = "" }) {
  return <div className={`container-fluid${clAdds}`}>{children}</div>;
}
