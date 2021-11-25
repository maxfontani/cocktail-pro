import { createSelector } from "@reduxjs/toolkit";
import { cocktailsAdapter } from "./cocktailsSlice";

import { RootState } from "../store";

export const {
  selectAll: selectAllCocktails,
  selectIds: selectCocktailsIds,
  selectById: selectCocktailById,
} = cocktailsAdapter.getSelectors<RootState>((state) => state.cocktails);

export const selectCocktails = (state: RootState) => state.cocktails;

export const selectCocktailsTotal = createSelector(
  selectCocktails,
  (cocktails) => cocktails.total,
);

export const selectShopStatus = createSelector(selectCocktails, (cocktails) => [
  cocktails.status,
  cocktails.error,
]);

export const selectAutoSuggestions = createSelector(
  selectCocktails,
  (cocktails) => cocktails.autosuggest,
);
