/*  eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { searchCocktailsByName, suggestCocktailsByName } from "./thunks";

import { Cocktail, CocktailsInitState } from "./types";

export const cocktailsAdapter = createEntityAdapter({
  selectId: (cocktail: Cocktail) => cocktail.idDrink,
});

const initialState = cocktailsAdapter.getInitialState<CocktailsInitState>({
  autosuggest: [],
  total: 0,
  status: "idle",
  error: null,
});

const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchCocktailsByName.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(searchCocktailsByName.fulfilled, (state, action) => {
      if (state.status === "loading" && action.payload?.length) {
        cocktailsAdapter.setAll(state, action.payload);
        state.total = action.payload.length;
        state.status = "success";
      }
    });
    builder.addCase(searchCocktailsByName.rejected, (state, action) => {
      if (state.status === "loading") {
        state.status = "error";
        state.error =
          action.error?.message || "Error fetching cocktails search data.";
      }
    });
    builder.addCase(suggestCocktailsByName.fulfilled, (state, action) => {
      const list = action.payload;
      if (!list || list.length === 0) {
        state.autosuggest.length = 0;
      } else {
        const cocktailList = list.map((cocktail: Cocktail) => {
          return { id: cocktail.idDrink, name: cocktail.strDrink };
        });
        state.autosuggest = cocktailList;
      }
    });
  },
});

export default cocktailsSlice.reducer;
