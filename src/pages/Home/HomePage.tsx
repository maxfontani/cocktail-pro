import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { MainSearch, MainFilter } from "../../components";
import { resetCocktailsState } from "../../store/cocktails/cocktailsSlice";
import { suggestCocktailsByName } from "../../services/calls";

import s from "./HomePage.module.css";

function HomePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetCocktailsState());
  }, []);

  return (
    <div className={s.outer}>
      <h2>Welcome to CocktailsPRO!</h2>
      <p>Search for a cocktail:</p>
      <MainSearch getSuggestionsAsync={suggestCocktailsByName} sugLimit={5} />
      <MainFilter />
    </div>
  );
}

export default HomePage;
