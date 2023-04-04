import FloatingForm from "./FloatingForm";

export default ({ children, x = 12 }) => (
  <div className={`col-md-${x}`}>
    <FloatingForm>{children}</FloatingForm>
  </div>
);
