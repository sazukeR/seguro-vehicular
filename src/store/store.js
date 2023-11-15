import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { policySlice } from "./policy/policySlice";

export const store = configureStore({
 reducer: {
  auth: authSlice.reducer,
  policy: policySlice.reducer,
 },
});
