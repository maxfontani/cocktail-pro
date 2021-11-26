import { useParams } from "react-router-dom";
import useApiCall from "../../../hooks/useApiCall/useApiCall";
import { getCocktailById } from "../../../services/calls";
import { Cocktail } from "../../../store/cocktails/types";

import s from "./CocktailInfo.module.css";

function CocktailInfo() {
  let { id } = useParams();
  const { state, data } = useApiCall<Cocktail>(getCocktailById, id);

  if (state.isError) {
    return <h2>Oops, something went wrong..</h2>;
  }

  if (!state.isLoading && !data) {
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
