export default function ContainerFluid({ children, clAdds = "" }) {
  return <div className={`container-fluid${clAdds}`}>{children}</div>;
}
