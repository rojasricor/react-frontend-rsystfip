import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  daily: {},
  scheduled: {},
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
});

export default statisticsSlice.reducer;
