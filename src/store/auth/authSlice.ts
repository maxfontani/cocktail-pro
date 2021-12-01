/* eslint no-param-reassign: "off" */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitialState } from "./types";

export const initialState: InitialState = {
  login: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SIGNED_IN: (_, action: PayloadAction<InitialState>) => {
      return action.payload;
    },
  },
});

export const { SIGNED_IN: signIn } = authSlice.actions;

export default authSlice.reducer;
