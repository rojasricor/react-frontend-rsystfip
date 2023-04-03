export default function DivCol12({ children, x = 12 }) {
  return <div className={`col-md-${x}`}>{children}</div>;
}
