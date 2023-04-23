import FloatingForm from "./FloatingForm";

const FloatingFormCol12x = ({ children, x = 12 }) => (
  <div className={`col-md-${x}`}>
    <FloatingForm>{children}</FloatingForm>
  </div>
);

export default FloatingFormCol12x;
