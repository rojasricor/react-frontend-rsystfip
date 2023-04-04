export default function Container({ children, clAdds = "" }) {
  return <div className={`container${clAdds}`}>{children}</div>;
}
