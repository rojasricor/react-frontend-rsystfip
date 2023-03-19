import { useState, useEffect } from "react";
import TableReports from "./TableReports";
import { API_ROUTE, UNSET_STATUS } from "../utils/constants";
import { getStartMonthDate, getEndMonthDate } from "../utils/resources";
import DaterReports from "./DaterReports";

export default function ActionerReports() {
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
    getReports();
  }, []);

  useEffect(() => {
    getReports();
  }, [startDate, endDate]);

  useEffect(() => {
    setReportFiltered(
      category !== UNSET_STATUS
        ? report.filter(({ id_person }) => id_person == category)
        : report
    );
  }, [category]);

  return (
    <>
      <DaterReports
        setStartDate={setStartDate}
        startDate={startDate}
        setEndDate={setEndDate}
        endDate={endDate}
        setCategory={setCategory}
        category={category}
        linkReport={linkReport}
      />
      <div className="table-responsive mt-5">
        <TableReports reportFiltered={reportFiltered} />
      </div>
    </>
  );
}
