export type CocktailsInitState = {
  autosuggest: Array<{
    id: string;
    name: string;
  }>;
  total: number;
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
};

export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: null;
  strInstructionsIT: string | null;
  "strInstructionsZH-HANS": string | null;
  "strInstructionsZH-HANT": string | null;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: "1 1/2 oz ";
  strMeasure2: "1/2 oz ";
  strMeasure3: "1 oz ";
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strImageSource: string;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
};

export type suggestCocktailsByNameProps = {
  searchText: string;
  sugLimit: number;
};
