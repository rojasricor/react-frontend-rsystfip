import { createSlice } from "@reduxjs/toolkit";
import { getStartMonthDate, getEndMonthDate } from "../../libs/todaylib";
import { UNSET_STATUS } from "../../constants";

const initialState = {
  reports: [],
  reportsOrigen: [],
  queryData: {
    startDate: getStartMonthDate(),
    endDate: getEndMonthDate(),
    category: UNSET_STATUS,
  },
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
    resetReports: () => initialState,
  },
});

export const { setReports, setReportsOrigen, setQueryData, resetReports } =
  reportsSlice.actions;
export default reportsSlice.reducer;
