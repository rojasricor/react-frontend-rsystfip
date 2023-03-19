import { useState, useEffect } from "react";
import FilterSelectPerson from "../components/FilterSelectPerson";
import ActionReports from "../components/ActionReports";
import TableReports from "../components/TableReports";
import { API_ROUTE, RESOURCES_ROUTE, UNSET_STATUS } from "../utils/constants";
import { getStartMonthDate, getEndMonthDate } from "../utils/resources";
import InputDate from "../components/InputDate";

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
          <InputDate
            labelInfo="Desde:"
            setDate={setStartDate}
            inputValue={startDate}
          />

          <InputDate
            labelInfo="Hasta:"
            setDate={setEndDate}
            inputValue={endDate}
          />

          <FilterSelectPerson
            categories={categories}
            setCategory={setCategory}
          />

          <ActionReports
            linkReport={linkReport}
            startDate={startDate}
            endDate={endDate}
            category={category}
          />
        </div>
        <div className="table-responsive mt-5">
          <TableReports reportFiltered={reportFiltered} />
        </div>
      </div>
    </div>
  );
}
