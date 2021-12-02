export type InitialState = {
  ingredients: Filter;
  caterogies: Filter;
  glasses: Filter;
  alcoholic: AlcFilter;
};

export type Filter = { [name: string]: boolean };
export type AlcFilter = "all" | "alc" | "nonalc";
