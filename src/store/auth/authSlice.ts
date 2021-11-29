/* eslint no-param-reassign: "off" */
import { createSlice } from "@reduxjs/toolkit";

import { InitialState } from "./types";

export const initialState: InitialState = {
  login: undefined,
  favs: [],
  history: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    ADDED_FAV: (state, action) => {
      const load = action.payload;
      if (typeof load === "string" && state.favs.includes(load)) {
        state.favs.push(action.payload);
      }
    },
    REMOVED_FAV: (state, action) => {
      if (typeof action.payload === "string") {
        const set = new Set(state.favs);
        set.delete(action.payload);
        state.favs = Array.from(set);
      }
    },
    ADDED_HISTORY: (state, action) => {
      if (typeof action.payload === "string") {
        state.history.push(action.payload);
      }
    },
    RESET: (_) => initialState,
  },
});

export const {
  ADDED_FAV: addFav,
  ADDED_HISTORY: addHistory,
  RESET: resetAuth,
} = authSlice.actions;

export default authSlice.reducer;
