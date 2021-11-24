import { useCallback } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { MainSearch } from "../../components";
import { searchCocktailsByName } from "../../store/cocktails/thunks";

function HomePage() {
  const dispatch = useAppDispatch();

  const handleMainSearchSubmit = useCallback((text: string) => {
    dispatch(searchCocktailsByName(text));
  }, []);

  return (
    <>
      <h2>Welcome to CocktailsPRO!</h2>
      <p>Search for a cocktail:</p>
      <MainSearch handleSearchSubmit={handleMainSearchSubmit} />
    </>
  );
}

export default HomePage;
