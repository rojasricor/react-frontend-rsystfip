import { createSlice } from "@reduxjs/toolkit";

const userSessionSaved = window.sessionStorage.getItem(
  "RSystfip_user_authenticated"
);

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
