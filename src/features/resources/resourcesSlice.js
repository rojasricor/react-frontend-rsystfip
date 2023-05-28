import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  documents: [],
  faculties: [],
};

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    setCategories: (state, { payload }) => {
      return {
        ...state,
        categories: payload,
      };
    },
    setDocuments: (state, { payload }) => {
      return {
        ...state,
        documents: payload,
      };
    },
    setFaculties: (state, { payload }) => {
      return {
        ...state,
        faculties: payload,
      };
    },
  },
});

export const { setCategories, setDocuments, setFaculties } =
  resourcesSlice.actions;
export default resourcesSlice.reducer;
