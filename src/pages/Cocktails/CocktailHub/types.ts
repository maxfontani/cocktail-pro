import { Cocktail, CocktailShort } from "../../../store/cocktails/types";

export type Props = {
  cocktails: Array<Cocktail | CocktailShort>;
  search: string;
};

export type FilterFn = (c: Cocktail | CocktailShort) => boolean;
