import { Card } from "../../../components";
import { getCocktailUrlFromId } from "../../../utils/helpers";

import { Props } from "./types";
import s from "./CocktailHub.module.css";

function CocktailHub({ cocktails }: Props) {
  return (
    <div className={s.cardHubOuter}>
      <div className={s.cardHub}>
        {cocktails &&
          cocktails.map((cocktail) => (
            <Card
              key={cocktail.idDrink}
              name={cocktail.strDrink}
              url={getCocktailUrlFromId(cocktail.idDrink)}
              image={cocktail.strDrinkThumb}
            />
          ))}
      </div>
    </div>
  );
}

export default CocktailHub;
