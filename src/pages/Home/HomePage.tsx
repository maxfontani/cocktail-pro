import { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router";
import { MainSearch } from "../../components";
import { resetCocktailsState } from "../../store/cocktails/cocktailsSlice";
import { suggestCocktailsByName } from "../../services/calls";

import s from "./HomePage.module.css";

function HomePage() {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    dispatch(resetCocktailsState());
  }, []);

  const mainSearchSubmitHandler = useCallback((text: string) => {
    navigator(`/cocktails?search=${text}`);
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
