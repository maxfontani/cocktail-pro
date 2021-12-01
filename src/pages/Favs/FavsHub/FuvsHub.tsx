import { Card } from "../../../components";
import { getCocktailUrl } from "../../../utils/helpers";

import { Props } from "./types";
import s from "./FavsHub.module.css";

function FavsHub({ favsArr }: Props) {
  return (
    <div className={s.cardHubOuter}>
      <div className={s.cardHub}>
        {favsArr.map((v) => (
          <Card
            key={v[0]}
            id={v[0]}
            name={v[1]["name"]}
            url={getCocktailUrl(v[0])}
            image={v[1]["image"]}
            isFav={true}
          />
        ))}
      </div>
    </div>
  );
}

export default FavsHub;
