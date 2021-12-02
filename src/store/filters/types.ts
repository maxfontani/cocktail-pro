export type InitialState = {
  ingredients: Filter;
  caterogies: Filter;
  glasses: Filter;
  alcoholic: AlcFilter;
};

export type Filter = string[];
export type AlcFilter = "any" | "alc" | "nonalc";
