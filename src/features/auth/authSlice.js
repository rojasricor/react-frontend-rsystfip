import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const authSlice = createSlice({
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
