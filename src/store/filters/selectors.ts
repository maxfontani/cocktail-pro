import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

export const selectFiltersState = (state: RootState) => state.filteres;

export const selectCatsFilter = createSelector(
  selectFiltersState,
  (f) => f.caterogies,
);
export const selectIngrFilter = createSelector(
  selectFiltersState,
  (f) => f.ingredients,
);
export const selectGlassFilter = createSelector(
  selectFiltersState,
  (f) => f.glasses,
);
export const selectAlcFilter = createSelector(
  selectFiltersState,
  (f) => f.alcoholic,
);
