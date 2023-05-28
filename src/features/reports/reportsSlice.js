import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    setReports: (state, { payload }) => payload,
  },
});

export const { setReports } = reportsSlice.actions;
export default reportsSlice.reducer;
