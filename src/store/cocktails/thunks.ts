import { createAsyncThunk } from "@reduxjs/toolkit";
import cocktailDbApi from "../../services/api";

export const searchCocktailsByName = createAsyncThunk(
  "shop/searchCocktailsByName",
  async (searchText: string) => {
    const response = await cocktailDbApi.get(`/search.php?s=${searchText}`);
    if (Array.isArray(response.data.drinks)) {
      return response.data.drinks;
    }
  },
);
