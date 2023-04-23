import { useNavigate } from "react-router-dom";

const Error404Actioner = () => {
  const navigate = useNavigate();

  return (
    <div className="d-grid d-sm-flex justify-content-sm-center">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline-secondary px-4"
      >
        Regresar
      </button>
    </div>
  );
};

export default Error404Actioner;
