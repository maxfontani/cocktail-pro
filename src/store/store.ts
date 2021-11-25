import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cocktailsSlice from "./cocktails/cocktailsSlice";

export const store = configureStore({
  reducer: {
    cocktails: cocktailsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
