import FloatingForm from "./FloatingForm";

export default function FloatingFormCol12x({ children, x = 12 }) {
  return (
    <div className={`col-md-${x}`}>
      <FloatingForm>{children}</FloatingForm>
    </div>
  );
}
