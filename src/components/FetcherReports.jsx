import { useState, useEffect } from "react";
import { API_ROUTE } from "../constants/api";
import PdfCreator from "./PdfCreator";

const FetcherReports = ({ startDate, endDate, reportsFiltered }) => {
  const [pngbase64, setPngbase64] = useState("");
  const [people, setPeople] = useState([]);
  const [reportsCountOnRange, setReportsCountOnRange] = useState([]);
  const [reportsCountAlltime, setReportsCountAlltime] = useState([]);

  const getPeople = async () => {
    const request = await fetch(`${API_ROUTE}/people`);
    const data = await request.json();
    setPeople(data);
  };

  const getReportsCountOnRange = async () => {
    const request = await fetch(
      `${API_ROUTE}/reports/count?start=${startDate}&end=${endDate}`
    );
    const data = await request.json();
    setReportsCountOnRange(data);
  };

  const getReportsCountAlltime = async () => {
    const request = await fetch(`${API_ROUTE}/reports/counts`);
    const data = await request.json();
    setReportsCountAlltime(data);
  };

  const getPngbase64 = async () => {
    const request = await fetch("/img/admin/avatar.png");
    const response = await request.blob();
    const reader = new FileReader();
    reader.readAsDataURL(response);
    reader.addEventListener("load", () => setPngbase64(reader.result));
  };

  useEffect(() => {
    getPeople();
    getReportsCountAlltime();
    getPngbase64();
  }, []);

  useEffect(() => {
    getReportsCountOnRange();
  }, [startDate, endDate]);

  return (
    <PdfCreator
      image={pngbase64}
      startDate={startDate}
      endDate={endDate}
      people={people}
      reportsFiltered={reportsFiltered}
      reportsCountOnRange={reportsCountOnRange}
      reportsCountAlltime={reportsCountAlltime}
    />
  );
};

export default FetcherReports;
