import { useGetCocktailByIdQuery } from "../../../services/cocktailApi";

import s from "./CocktailInfo.module.css";

type Props = { id: string };

function CocktailInfo({ id }: Props) {
  let { data, error, isLoading } = useGetCocktailByIdQuery(id);

  if (error) {
    return <h2>Oops, something went wrong..</h2>;
  }

  if (!isLoading && !data) {
    return <h2>Cocktail not found.</h2>;
  }

  return (
    <div className={s.outer}>
      {data && (
        <>
          <h2 className={s.title}>{data.strDrink}</h2>
          <img className={s.drinkImg} src={data.strDrinkThumb} />
          <h3>Instructions:</h3>
          <p>{data.strInstructions}</p>
        </>
      )}
    </div>
  );
}

export default CocktailInfo;
