/* eslint no-param-reassign: "off" */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AlcFilter, Filter, InitialState } from "./types";

export const initialState: InitialState = {
  ingredients: {},
  caterogies: {},
  glasses: {},
  alcoholic: "all",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    SET_INGREDIENTS: (state, action: PayloadAction<Filter>) => {
      state.ingredients = action.payload;
    },
    SET_CATEGORIES: (state, action: PayloadAction<Filter>) => {
      state.caterogies = action.payload;
    },
    SET_GLASSES: (state, action: PayloadAction<Filter>) => {
      state.glasses = action.payload;
    },
    SET_ALCOHOLIC: (state, action: PayloadAction<AlcFilter>) => {
      state.alcoholic = action.payload;
    },
  },
});

export const {
  SET_ALCOHOLIC: setAlcFilter,
  SET_CATEGORIES: setCatFilter,
  SET_GLASSES: setGlassFilter,
  SET_INGREDIENTS: setIngrFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
