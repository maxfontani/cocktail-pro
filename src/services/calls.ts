import { AxiosError } from "axios";
import { axiosCocktailApi } from "./cocktailApi";
import { getCocktailUrl } from "../utils/helpers";

import { GetCocktailById, SuggestCocktailsByName } from "./types";
import { Cocktail } from "../store/cocktails/types";

export const getCocktailById: GetCocktailById = (id) => {
  return axiosCocktailApi
    .get(`/lookup.php?i=${id}`)
    .then((response) => {
      const drinks = response.data?.drinks;
      if (Array.isArray(drinks)) {
        if (drinks.length !== 0) {
          return { data: drinks[0] };
        }
      }
    })
    .catch((axiosError) => {
      let err: AxiosError = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    });
};

export const suggestCocktailsByName: SuggestCocktailsByName = (
  searchText,
  limit,
) => {
  return axiosCocktailApi
    .get(`/search.php?s=${searchText}`)
    .then((response) => {
      if (Array.isArray(response.data?.drinks)) {
        let list = response.data.drinks;
        list = list.length <= limit ? list : list.slice(0, limit);
        return list.map((cocktail: Cocktail) => ({
          id: cocktail.idDrink,
          name: cocktail.strDrink,
          url: getCocktailUrl(cocktail.idDrink),
        }));
      }
      return [];
    })
    .catch(() => {
      throw new Error(
        "Server error while fetching cocktail search suggestions.",
      );
    });
};
