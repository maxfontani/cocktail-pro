import cocktailDbApi from "./api";

export function getCocktailById(id: number) {
  return cocktailDbApi
    .get(`/lookup.php?i=${id}`)
    .then((response) => {
      if (response.data && response.data.idDrink) {
        return response.data;
      }
      return;
    })
    .catch(() => {
      throw new Error("Server error while fetching cocktail by id.");
    });
}
