import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { useParams, useSearchParams } from "react-router-dom";
import { selectAllCocktails } from "../../store/cocktails/selectors";
import { MainFilter } from "../../components";
import CocktailHub from "./CocktailHub/CocktailHub";

import s from "./CocktailsPage.module.css";
import { searchCocktailsByName } from "../../store/cocktails/thunks";
import { CocktailInfo } from ".";

function CocktailsPage() {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const cocktails = useAppSelector(selectAllCocktails);
  let [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(searchCocktailsByName(searchParams.get("search") || ""));
  }, []);

  return (
    <div className={s.outer}>
      {id !== undefined ? (
        <CocktailInfo id={id} />
      ) : (
        <div className={s.splitTwoRows}>
          <MainFilter />
          <CocktailHub cocktails={cocktails} />
        </div>
      )}
    </div>
  );
}

export default CocktailsPage;
