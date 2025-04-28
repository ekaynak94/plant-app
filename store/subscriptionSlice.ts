import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Plan = {
  title: string;
  subtitle: string;
  discount?: string;
};

type SubscriptionState = {
  plans: Plan[];
  selectedPlanIndex: number | null;
  discountOfferCount: number;
};

const initialState: SubscriptionState = {
  plans: [
    {
      title: "1 Month",
      subtitle: "$2.99/month, auto renewable",
    },
    {
      title: "1 Year",
      subtitle: "First 3 days free, then $529.99/year",
      discount: "Save 50%",
    },
  ],
  selectedPlanIndex: null,
  discountOfferCount: 1,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    selectPlan(state, action: PayloadAction<number>) {
      state.selectedPlanIndex = action.payload;
      state.discountOfferCount = state.plans.filter(
        (plan, index) => index !== action.payload && plan.discount
      ).length;
    },
  },
});

export const { selectPlan } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
