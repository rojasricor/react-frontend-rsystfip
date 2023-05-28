import { useState, useEffect } from "react";
import DaterReports from "./DaterReports";
import TableReports from "./TableReports";
import { API_ROUTE, UNSET_STATUS } from "../constants";
import { getStartMonthDate, getEndMonthDate } from "../libs/todaylib";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setReports } from "../features/reports/reportsSlice";

const ActionerReports = () => {
  const [reportsOrigen, setReportsOrigen] = useState([]);
  const [queryData, setQueryData] = useState({
    startDate: getStartMonthDate(),
    endDate: getEndMonthDate(),
    category: UNSET_STATUS,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQueryData({
      ...queryData,
      [e.target.name]: e.target.value,
    });
  };

  const getReports = async () => {
    try {
      const { data } = await axios(
        `${API_ROUTE}/reports?start=${queryData.startDate}&end=${queryData.endDate}&category=${queryData.category}`
      );

      dispatch(setReports(data));
      setReportsOrigen(data);
    } catch ({ message }) {
      toast.error(message);
    }
  };

  useEffect(() => {
    getReports();
  }, []);

  useEffect(() => {
    getReports();
  }, [queryData.startDate, queryData.endDate]);

  useEffect(() => {
    dispatch(
      setReports(
        queryData.category !== UNSET_STATUS
          ? reportsOrigen.filter(
              ({ id_person }) => id_person == queryData.category
            )
          : reportsOrigen
      )
    );
  }, [queryData.category]);

  return (
    <>
      <DaterReports handleChange={handleChange} queryData={queryData} />
      <TableReports queryData={queryData} />
    </>
  );
};

export default ActionerReports;
