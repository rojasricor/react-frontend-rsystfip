import { createSlice } from "@reduxjs/toolkit";
import { formatTodaysDate, formatTodaysDateTime } from "../../libs/todaylib";

const formDataInitialState = {
  eventId: "",
  person: "",
  doc: "",
  doctype: "",
  name: "",
  telContact: "",
  emailContact: "",
  facultie: "",
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
  formData: {
    add: formDataInitialState,
    edit: formDataInitialState,
    schedule: formDataInitialState,
  },
  isLoading: false,
  deans: null,
};

const programmingSlice = createSlice({
  name: "programming",
  initialState,
  reducers: {
    setFormData: (state, { payload }) => {
      const [action, formData] = payload;

      if (action === "add") {
        return {
          ...state,
          formData: {
            ...state.formData,
            add: formData ? formData : formDataInitialState,
          },
        };
      }

      if (action === "edit") {
        return {
          ...state,
          formData: {
            ...state.formData,
            edit: formData ? formData : formDataInitialState,
          },
        };
      }

      if (action === "schedule") {
        return {
          ...state,
          formData: {
            ...state.formData,
            schedule: formData ? formData : formDataInitialState,
          },
        };
      }
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
    resetAllFormDataProgramming: (state) => {
      return {
        ...state,
        formData: {
          ...initialState.formData,
        },
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
  resetAllFormDataProgramming,
} = programmingSlice.actions;
export default programmingSlice.reducer;
