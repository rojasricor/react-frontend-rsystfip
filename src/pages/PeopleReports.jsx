import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableReports from "../components/TableReports";
import {
  API_ROUTE,
  API_DOMAIN,
  RESOURCES_ROUTE,
  UNSET_STATUS,
} from "../utils/constants";
import { getStartMonthDate, getEndMonthDate } from "../utils/resources";
import { FaChartArea, FaDownload } from "react-icons/fa";

export default function PeopleReports() {
  const [categories, setCategories] = useState([]);
  const [report, setReport] = useState([]);
  const [reportFiltered, setReportFiltered] = useState([]);
  const [startDate, setStartDate] = useState(getStartMonthDate());
  const [endDate, setEndDate] = useState(getEndMonthDate());
  const [category, setCategory] = useState(UNSET_STATUS);
  const [linkReport, setLinkReport] = useState("");

  async function getReports() {
    const request = await fetch(
      `${API_ROUTE}/get/reports?start=${startDate}&end=${endDate}&category=${category}`
    );
    const { reports, linkReport } = await request.json();
    setReport(reports);
    setReportFiltered(reports);
    setLinkReport(linkReport);
  }

  useEffect(() => {
    document.title = "RSystfip | Generate reports";
    getReports();
    fetch(`${RESOURCES_ROUTE}?resource=categories`)
      .then((request) => request.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => getReports, [startDate, endDate]);

  useEffect(() => {
    setReportFiltered(
      category !== UNSET_STATUS
        ? report.filter(({ id_person }) => id_person == category)
        : report
    );
  }, [category]);

  return (
    <div className="row">
      <div className="col-12">
        <h1 className="h3">Reportes por mes</h1>
        <div className="row g-3">
          <div className="col-md-2">
            <label className="form-label">Desde:</label>
            <input
              onChange={(evt) => setStartDate(evt.target.value)}
              type="date"
              value={startDate}
              className="form-control"
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Hasta:</label>
            <input
              onChange={(evt) => setEndDate(evt.target.value)}
              type="date"
              value={endDate}
              className="form-control"
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Persona:</label>
            <select
              onChange={(evt) => setCategory(evt.target.value)}
              className="form-select"
            >
              <option value={UNSET_STATUS}>No seleccionado</option>
              {categories.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.person}
                </option>
              ))}
            </select>
          </div>
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
        </div>
        <div className="table-responsive mt-5">
          <TableReports reportFiltered={reportFiltered} />
        </div>
      </div>
    </div>
  );
}
