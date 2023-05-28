import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticatedUser: (state, { payload }) => payload,
    resetUserAuthenticated: () => initialState,
  },
});

export const { setAuthenticatedUser, resetUserAuthenticated } =
  authSlice.actions;
export default authSlice.reducer;
