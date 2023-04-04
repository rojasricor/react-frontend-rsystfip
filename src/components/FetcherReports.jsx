import { useState, useEffect } from "react";
import { API_ROUTE } from "../constants/api";
import PdfCreator from "./PdfCreator";

export default function FetcherReports({
  startDate,
  endDate,
  reportsFiltered,
}) {
  const [pngbase64, setPngbase64] = useState("");
  const [people, setPeople] = useState([]);
  const [reportsCountOnRange, setReportsCountOnRange] = useState([]);
  const [reportsCountAlltime, setReportsCountAlltime] = useState([]);

  function getPeople() {
    fetch(`${API_ROUTE}/people`)
      .then((request) => request.json())
      .then((data) => setPeople(data));
  }

  function getReportsCountOnRange() {
    fetch(`${API_ROUTE}/reports/count?start=${startDate}&end=${endDate}`)
      .then((request) => request.json())
      .then((data) => setReportsCountOnRange(data));
  }

  function getReportsCountAlltime() {
    fetch(`${API_ROUTE}/reports/counts`)
      .then((request) => request.json())
      .then((data) => setReportsCountAlltime(data));
  }

  async function getPngbase64() {
    const request = await fetch("/img/admin/avatar.png");
    const response = await request.blob();
    const reader = new FileReader();
    reader.readAsDataURL(response);
    reader.addEventListener("load", () => setPngbase64(reader.result));
  }

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
}
