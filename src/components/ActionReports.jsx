import { Link } from "react-router-dom";
import { API_DOMAIN } from "../utils/constants";
import { FaChartArea, FaDownload } from "react-icons/fa";

export default function ActionReports({
  linkReport,
  startDate,
  endDate,
  category,
}) {
  return (
    <div className="col-12">
      <div className="btn-group btn-group-sm">
        <Link
          to="/people/statistics"
          className="btn btn-warning text-light"
          title="Generar estadísticas"
        >
          Estadísticas <FaChartArea className="mb-1" />
        </Link>
        <button
          onClick={() => {
            window.open(
              `${API_DOMAIN.concat(
                linkReport
              )}?start=${startDate}&end=${endDate}&category=${category}`
            );
          }}
          className="btn btn-dark"
          title="Reporte PDF"
        >
          Descargar <FaDownload className="mb-1" />
        </button>
      </div>
    </div>
  );
}
