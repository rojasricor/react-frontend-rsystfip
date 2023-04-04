import Responsive from "./Responsive";

export default function Table({ children, clAdds = "" }) {
  return (
    <Responsive>
      <table className={`table table-hover table-sm text-center${clAdds}`}>
        {children}
      </table>
    </Responsive>
  );
}
