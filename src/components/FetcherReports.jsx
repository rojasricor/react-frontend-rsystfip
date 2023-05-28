import { useState, useEffect } from "react";
import { API_ROUTE } from "../constants";
import PdfCreator from "./PdfCreator";
import axios from "axios";
import { toast } from "react-toastify";

const FetcherReports = ({ queryData }) => {
  const [pngbase64, setPngbase64] = useState("");
  const [people, setPeople] = useState([]);
  const [reportsCountOnRange, setReportsCountOnRange] = useState([]);
  const [reportsCountAlltime, setReportsCountAlltime] = useState([]);

  const getPeople = async () => {
    try {
      const { data } = await axios(`${API_ROUTE}/people`);
      setPeople(data);
    } catch ({ message }) {
      toast.error(message);
    }
  };

  const getReportsCountOnRange = async () => {
    try {
      const { data } = await axios(
        `${API_ROUTE}/reports/count?start=${queryData.startDate}&end=${queryData.endDate}`
      );
      setReportsCountOnRange(data);
    } catch ({ message }) {
      toast.error(message);
    }
  };

  const getReportsCountAlltime = async () => {
    try {
      const { data } = await axios(`${API_ROUTE}/reports/counts`);
      setReportsCountAlltime(data);
    } catch ({ message }) {
      toast.error(message);
    }
  };

  const getPngbase64 = async () => {
    try {
      const { data } = await axios("/img/admin/avatar.png", {
        responseType: "blob",
      });
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.addEventListener("load", () => setPngbase64(reader.result));
    } catch ({ message }) {
      toast.error(message);
    }
  };

  useEffect(() => {
    getPeople();
    getReportsCountAlltime();
    getPngbase64();
  }, []);

  useEffect(() => {
    getReportsCountOnRange();
  }, [queryData.startDate, queryData.endDate]);

  return (
    <PdfCreator
      image={pngbase64}
      queryData={queryData}
      people={people}
      reportsCountOnRange={reportsCountOnRange}
      reportsCountAlltime={reportsCountAlltime}
    />
  );
};

export default FetcherReports;
