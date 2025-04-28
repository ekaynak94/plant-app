import { configureStore } from "@reduxjs/toolkit";
import onboardingReducer from "./onboardingSlice";
import subscriptionReducer from "./subscriptionSlice";

const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    subscription: subscriptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
