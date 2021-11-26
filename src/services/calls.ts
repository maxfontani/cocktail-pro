import cocktailDbApi from "./api";
import { getCocktailUrlFromId } from "../utils/helpers";

import { Cocktail } from "../store/cocktails/types";
import { Suggestions } from "../components/MainSearch/types";

export function getCocktailById(id: string): Promise<Cocktail | undefined> {
  return cocktailDbApi
    .get(`/lookup.php?i=${id}`)
    .then((response) => {
      const drinks = response.data?.drinks;
      if (Array.isArray(drinks)) {
        if (drinks.length !== 0) {
          return drinks[0];
        }
      }
    })
    .catch(() => {
      throw new Error("Server error while fetching cocktail by id.");
    });
}

export function suggestCocktailsByName(
  searchText: string,
  limit: number,
): Promise<Suggestions> {
  return cocktailDbApi
    .get(`/search.php?s=${searchText}`)
    .then((response) => {
      if (Array.isArray(response.data?.drinks)) {
        let list = response.data.drinks;
        list = list.length <= limit ? list : list.slice(0, limit);
        return list.map((cocktail: Cocktail) => ({
          id: cocktail.idDrink,
          name: cocktail.strDrink,
          url: getCocktailUrlFromId(cocktail.idDrink),
        }));
      }
      return [];
    })
    .catch(() => {
      throw new Error(
        "Server error while fetching cocktail search suggestions.",
      );
    });
}
