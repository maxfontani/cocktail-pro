import { Card } from "../../../components";
import { getCocktailUrl } from "../../../utils/helpers";
import { useAppSelector } from "../../../hooks/redux";
import { selectFavs } from "../../../store/auth/selectors";

import { FilterFn, Props } from "./types";
import s from "./CocktailHub.module.css";

function CocktailHub({ cocktails, search }: Props) {
  const favs = useAppSelector(selectFavs);

  const filterFn: FilterFn = (c) => {
    const name = c.strDrink.toLocaleLowerCase();
    const filter = search.toLocaleLowerCase();
    return name.includes(filter);
  };

  return (
    <div className={s.cardHubOuter}>
      <div className={s.cardHub}>
        {cocktails.filter(filterFn).map((v) => (
          <Card
            key={v.idDrink}
            id={v.idDrink}
            name={v.strDrink}
            showName
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
