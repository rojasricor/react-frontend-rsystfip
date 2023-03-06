import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="mb-4"
        src="/rsystfip.svg"
        alt="Rsystfip"
        width="72"
        height="57"
      />
      <h1 className="display-5 fw-bold">Error 404</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Not Found.</p>
        <div className="d-grid d-sm-flex justify-content-sm-center">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
}
