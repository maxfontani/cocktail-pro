import { createAsyncThunk } from "@reduxjs/toolkit";
import cocktailDbApi from "../../services/api";

import { suggestCocktailsByNameProps } from "./types";

export const searchCocktailsByName = createAsyncThunk(
  "shop/searchCocktailsByName",
  async (searchText: string) => {
    const response = await cocktailDbApi.get(`/search.php?s=${searchText}`);
    if (Array.isArray(response.data.drinks)) {
      return response.data.drinks;
    }
  },
);

export const suggestCocktailsByName = createAsyncThunk(
  "shop/suggestCocktailsByName",
  async ({ searchText, sugLimit }: suggestCocktailsByNameProps) => {
    const response = await cocktailDbApi.get(`/search.php?s=${searchText}`);
    if (Array.isArray(response.data.drinks)) {
      const arr = response.data.drinks;
      if (arr.length <= sugLimit) return arr;
      return arr.slice(0, 5);
    }
    return;
  },
);
