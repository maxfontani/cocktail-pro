import { Cocktail, CocktailShort } from "../../../store/cocktails/types";
import { Filter, InitialState as Filters } from "../../../store/filters/types";

export type Props = {
  cocktails: Array<Cocktail | CocktailShort>;
  search: string;
};

export type FilterFn = (c: Cocktail | CocktailShort) => boolean;
