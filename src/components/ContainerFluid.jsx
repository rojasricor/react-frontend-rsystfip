const ContainerFluid = ({ children, clAdds = "" }) => (
  <div className={`container-fluid${clAdds}`}>{children}</div>
);

export default ContainerFluid;
