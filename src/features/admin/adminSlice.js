import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setUsers: (state, { payload }) => payload,
  },
});

export const { setUsers } = adminSlice.actions;
export default adminSlice.reducer;
