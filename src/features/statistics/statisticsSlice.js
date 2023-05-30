import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  daily: {
    statistic: [],
    mostAgendatedOnRange: [],
    mostAgendatedAllTime: [],
  },
  scheduled: {
    statistic: [],
    mostAgendatedOnRange: [],
    mostAgendatedAllTime: [],
  },
  queryData: {},
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
});

export default statisticsSlice.reducer;
