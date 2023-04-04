import Responsive from "./Responsive";

export default ({ children, clAdds = "" }) => (
  <Responsive>
    <table className={`table table-hover table-sm text-center${clAdds}`}>
      {children}
    </table>
  </Responsive>
);