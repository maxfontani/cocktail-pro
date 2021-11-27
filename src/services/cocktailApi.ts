import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cocktail } from "../store/cocktails/types";

export const axiosCocktailApi = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
});

export const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/",
  }),
  endpoints: (build) => ({
    getCocktailById: build.query<Cocktail, string>({
      query: (id) => `lookup.php?i=${id}`,
      transformResponse: (response: { drinks: Cocktail[] }) =>
        response.drinks[0],
    }),
  }),
});

export const { useGetCocktailByIdQuery } = cocktailApi;
