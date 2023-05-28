import { createSlice } from "@reduxjs/toolkit";
import { getStartMonthDate, getEndMonthDate } from "../../libs/todaylib";
import { UNSET_STATUS } from "../../constants";

const queryDataInitialState = {
  startDate: getStartMonthDate(),
  endDate: getEndMonthDate(),
  category: UNSET_STATUS,
};

const initialState = {
  reports: [],
  reportsOrigen: [],
  queryData: queryDataInitialState,
};

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    setReports: (state, { payload }) => {
      return {
        ...state,
        reports: payload,
      };
    },
    setReportsOrigen: (state, { payload }) => {
      return {
        ...state,
        reportsOrigen: payload,
      };
    },
    setQueryData: (state, { payload }) => {
      return {
        ...state,
        queryData: payload,
      };
    },
    resetReports: (state) => {
      return {
        ...state,
        queryData: queryDataInitialState,
      };
    },
  },
});

export const { setReports, setReportsOrigen, setQueryData, resetReports } =
  reportsSlice.actions;
export default reportsSlice.reducer;
