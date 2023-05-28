import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import peopleSlice from "../features/people/peopleSlice";
import adminSlice from "../features/admin/adminSlice";
import cancelledPeopleSlice from "../features/cancelledPeople/cancelledPeopleSlice";
import reportsSlice from "../features/reports/reportsSlice";
import resourcesSlice from "../features/resources/resourcesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    people: peopleSlice,
    admin: adminSlice,
    cancelledPeople: cancelledPeopleSlice,
    reports: reportsSlice,
    resources: resourcesSlice,
  },
});
