import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: 0,
  people: [],
  peopleOrigen: [],
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setPeople: (state, { payload }) => {
      return {
        ...state,
        people: payload,
      };
    },
    setPeopleOrigen: (state, { payload }) => {
      return {
        ...state,
        peopleOrigen: payload,
      };
    },
    setIsLoading: (state, { payload }) => {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
});

export const { setPeople, setPeopleOrigen, setIsLoading } = peopleSlice.actions;
export default peopleSlice.reducer;
