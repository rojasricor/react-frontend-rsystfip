import { createSlice } from "@reduxjs/toolkit";
import { AUTH_KEY } from "../../constants";

const userSessionSaved = window.sessionStorage.getItem(AUTH_KEY);

const initialState = {
  auth: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: userSessionSaved ? JSON.parse(userSessionSaved) : initialState,
  reducers: {
    setAuthenticatedUser: (state, { payload }) => payload,
    resetUserAuthenticated: () => initialState,
  },
});

export const { setAuthenticatedUser, resetUserAuthenticated } =
  authSlice.actions;
export default authSlice.reducer;
