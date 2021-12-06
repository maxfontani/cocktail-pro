import { suggestCocktailsByName } from "../../services/calls";
import { MainSearch, MainFilter } from "../../components";

import s from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={s.outer}>
      <h2>Welcome to CocktailsPRO!</h2>
      <p>Search for a cocktail:</p>
      <MainSearch getSuggestionsAsync={suggestCocktailsByName} />
      <MainFilter />
    </div>
  );
}

export default HomePage;
