import { createSlice } from "@reduxjs/toolkit";
import { UNSET_STATUS } from "../../constants";

const formDataInitialState = {
  role: UNSET_STATUS,
  name: "",
  lastname: "",
  docType: UNSET_STATUS,
  doc: "",
  email: "",
  tel: "",
  password: "",
  passwordConfirmation: "",
};

const initialState = {
  users: [],
  formData: formDataInitialState,
  isLoading: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      return {
        ...state,
        users: payload,
      };
    },
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
    resetFormDataAdmin: (state) => {
      return {
        ...state,
        formData: formDataInitialState,
      };
    },
  },
});

export const { setUsers, setFormData, setIsLoading, resetFormDataAdmin } =
  adminSlice.actions;
export default adminSlice.reducer;
