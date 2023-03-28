import DivCol12 from "./DivCol12";

export default function Submitter({ children, loading }) {
  return (
    <DivCol12>
      <button className="w-100 btn btn-primary btn-lg mb-3" disabled={loading}>
        {children}
      </button>
    </DivCol12>
  );
}
