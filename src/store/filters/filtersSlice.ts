/* eslint no-param-reassign: "off" */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FiltBy, Filter, InitialState } from "./types";

export const FILTERS: FiltBy[] = ["i", "c", "g", "a", ""];

export const initialState: InitialState = {
  filter: [],
  filtBy: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    SET_FILTER: (state, action: PayloadAction<Filter | string>) => {
      if (typeof action.payload === "string") {
        state.filter = [action.payload];
      } else {
        state.filter = action.payload;
      }
    },
    SET_FILT_BY: (state, action: PayloadAction<FiltBy>) => {
      state.filtBy = action.payload;
    },
    RESET: () => initialState,
  },
});

export const {
  SET_FILTER: setFilter,
  SET_FILT_BY: setFiltBy,
  RESET: resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
