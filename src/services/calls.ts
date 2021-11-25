import cocktailDbApi from "./api";
import { Cocktail } from "../store/cocktails/types";
import { AutoSuggestions } from "../components/MainSearch/types";

export function getCocktailById(id: number) {
  return cocktailDbApi
    .get(`/lookup.php?i=${id}`)
    .then((response) => {
      if (
        response.data &&
        response.data.drinks &&
        Array.isArray(response.data.drinks)
      ) {
        const arr = response.data.drinks;
        if (arr.length !== 0) {
          return arr[0];
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
): Promise<AutoSuggestions> {
  return cocktailDbApi
    .get(`/search.php?s=${searchText}`)
    .then((response) => {
      if (Array.isArray(response.data.drinks)) {
        let list = response.data.drinks;
        list = list.length <= limit ? list : list.slice(0, limit);
        return list.map((cocktail: Cocktail) => {
          return {
            id: cocktail.idDrink,
            name: cocktail.strDrink,
            url: `/cocktail?id=${cocktail.idDrink}`,
          };
        });
      }
      return [];
    })
    .catch(() => {
      throw new Error(
        "Server error while fetching cocktail search suggestions.",
      );
    });
}
