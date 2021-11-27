import { Card } from "../../../components";
import { getCocktailUrl } from "../../../utils/helpers";

import { Props } from "./types";
import s from "./CocktailHub.module.css";

function CocktailHub({ cocktails }: Props) {
  return (
    <div className={s.cardHubOuter}>
      <div className={s.cardHub}>
        {cocktails.map((v) => (
          <Card
            key={v.idDrink}
            name={v.strDrink}
            url={getCocktailUrl(v.idDrink)}
            image={v.strDrinkThumb}
          />
        ))}
      </div>
    </div>
  );
}

export default CocktailHub;
