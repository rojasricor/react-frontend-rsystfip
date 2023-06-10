import { createSlice } from "@reduxjs/toolkit";
import { UNSET_STATUS } from "../../constants";
import { formatTodaysDate, formatTodaysDateTime } from "../../libs/todaylib";

const formDataInitialState = {
  eventId: "",
  person: UNSET_STATUS,
  doc: "",
  doctype: UNSET_STATUS,
  name: "",
  telContact: "",
  emailContact: "",
  facultie: UNSET_STATUS,
  asunt: "",
  color: "#388cdc",
  date: formatTodaysDate(),
  start: formatTodaysDateTime(),
  end: formatTodaysDateTime(),
  status: 2,
  disabledAll: true,
  disabledAfterAutocomplete: false,
};

const initialState = {
  formData: formDataInitialState,
  isLoading: false,
  deans: null,
};

const programmingSlice = createSlice({
  name: "programming",
  initialState,
  reducers: {
    setFormData: (state, { payload }) => {
      return {
        ...state,
        formData: payload,
      };
    },
    setIsLoading: (state, { payload }) => {
      return {
        ...state,
        isLoading: payload,
      };
    },
    setDisabledAll: (state, { payload }) => {
      return {
        ...state,
        disabledAll: payload,
      };
    },
    setDisabledAfterAutocomplete: (state, { payload }) => {
      return {
        ...state,
        disabledAfterAutocomplete: payload,
      };
    },
    setDeans: (state, { payload }) => {
      return { ...state, deans: payload };
    },
    resetFormDataProgramming: (state) => {
      return {
        ...state,
        formData: formDataInitialState,
      };
    },
  },
});

export const {
  setFormData,
  setIsLoading,
  setDisabledAll,
  setDisabledAfterAutocomplete,
  setDeans,
  resetFormDataProgramming,
} = programmingSlice.actions;
export default programmingSlice.reducer;
