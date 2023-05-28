import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cancelledPeopleSlice = createSlice({
  name: "cancelledPeople",
  initialState,
  reducers: {
    setCancelledPeople: (state, { payload }) => payload,
  },
});

export const { setCancelledPeople } = cancelledPeopleSlice.actions;
export default cancelledPeopleSlice.reducer;
