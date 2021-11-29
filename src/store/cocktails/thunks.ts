import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosCocktailApi } from "../../services/cocktailApi";

export const searchCocktailsByName = createAsyncThunk(
  "cocktails/searchCocktailsByName",
  async (searchText: string) => {
    const response = await axiosCocktailApi.get(`/search.php?s=${searchText}`);
    if (Array.isArray(response.data.drinks)) {
      return response.data.drinks;
    }
  },
);
