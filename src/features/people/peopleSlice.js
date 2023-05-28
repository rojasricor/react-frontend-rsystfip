import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setPeople: (state, { payload }) => payload,
  },
});

export const { setPeople, filterPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
