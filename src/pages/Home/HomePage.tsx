import { useCallback } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { MainSearch } from "../../components";
import { suggestCocktailsByName } from "../../services/calls";
import { searchCocktailsByName } from "../../store/cocktails/thunks";

import s from "./HomePage.module.css";

function HomePage() {
  const dispatch = useAppDispatch();

  const mainSearchSubmitHandler = useCallback((text: string) => {
    dispatch(searchCocktailsByName(text));
  }, []);

  return (
    <div className={s.outer}>
      <h2>Welcome to CocktailsPRO!</h2>
      <p>Search for a cocktail:</p>
      <MainSearch
        onSearchSubmit={mainSearchSubmitHandler}
        getSuggestionsAsync={suggestCocktailsByName}
        sugLimit={5}
      />
    </div>
  );
}

export default HomePage;
