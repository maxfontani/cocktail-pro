import { Cocktail } from "../store/cocktails/types";
import { Suggestions } from "../components/MainSearch/types";

export type GetCocktailById = (
  id: string,
) => Promise<
  | { data: Cocktail }
  | { error: { status: number | undefined; data: any } }
  | undefined
>;

export type SuggestCocktailsByName = (
  searchText: string,
  limit: number,
) => Promise<Suggestions>;
