import { useState, useEffect } from "react";
import DaterReports from "./DaterReports";
import TableReports from "./TableReports";
import { API_ROUTE, UNSET_STATUS } from "../constants";
import { getStartMonthDate, getEndMonthDate } from "../libs/todaylib";
import axios from "axios";
import { toast } from "react-toastify";

const ActionerReports = () => {
  const [report, setReport] = useState([]);
  const [reportFiltered, setReportFiltered] = useState([]);
  const [startDate, setStartDate] = useState(getStartMonthDate());
  const [endDate, setEndDate] = useState(getEndMonthDate());
  const [category, setCategory] = useState(UNSET_STATUS);

  const getReports = async () => {
    try {
      const { data } = await axios(
        `${API_ROUTE}/reports?start=${startDate}&end=${endDate}&category=${category}`
      );
      setReport(data);
      setReportFiltered(data);
    } catch ({ message }) {
      toast.error(message);
    }
  };

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
        reportsFiltered={reportFiltered}
      />
      <TableReports
        start={startDate}
        end={endDate}
        reportFiltered={reportFiltered}
      />
    </>
  );
};

export default ActionerReports;
