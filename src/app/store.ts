import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from '../features/reseravtionSlice';
import customerReducer from "../features/customerSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;