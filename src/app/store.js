import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import peopleSlice from "../features/people/peopleSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    people: peopleSlice,
  },
});
