import DivCol12 from "./DivCol12";

export default ({ children, loading }) => (
  <DivCol12>
    <button className="w-100 btn btn-primary btn-lg mb-3" disabled={loading}>
      {children}
    </button>
  </DivCol12>
);
