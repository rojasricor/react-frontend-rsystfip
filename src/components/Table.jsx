import Responsive from "./Responsive";

const Table = ({ children, clAdds = "" }) => (
  <Responsive>
    <table
      className={`table table-hover table-striped table-sm text-center${clAdds}`}
    >
      {children}
    </table>
  </Responsive>
);

export default Table;
