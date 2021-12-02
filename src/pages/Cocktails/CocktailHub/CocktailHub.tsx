import { Card } from "../../../components";
import { getCocktailUrl } from "../../../utils/helpers";
import { useAppSelector } from "../../../hooks/redux";
import { selectFavs } from "../../../store/auth/selectors";

import { Props } from "./types";
import s from "./CocktailHub.module.css";

function CocktailHub({ cocktails }: Props) {
  const favs = useAppSelector(selectFavs);

  return (
    <div className={s.cardHubOuter}>
      <div className={s.cardHub}>
        {cocktails.map((v) => (
          <Card
            key={v.idDrink}
            id={v.idDrink}
            name={v.strDrink}
            url={getCocktailUrl(v.idDrink)}
            image={v.strDrinkThumb}
            isFav={v.idDrink in favs}
          />
        ))}
      </div>
    </div>
  );
}

export default CocktailHub;
