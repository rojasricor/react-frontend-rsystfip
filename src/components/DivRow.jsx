export default function DivRow({ children, clAdds = "" }) {
  return <div className={`row g-3${clAdds}`}>{children}</div>;
}
