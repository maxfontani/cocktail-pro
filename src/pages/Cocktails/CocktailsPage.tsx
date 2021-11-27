import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { useParams, useSearchParams } from "react-router-dom";
import { selectAllCocktails } from "../../store/cocktails/selectors";
import CocktailHub from "./CocktailHub/CocktailHub";
import CocktailsSidebar from "./CocktailsSidebar/CocktailsSidebar";

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
      <div className={s.splitTwoCol}>
        {id !== undefined ? (
          <CocktailInfo id={id} />
        ) : (
          <>
            <CocktailsSidebar />
            <CocktailHub cocktails={cocktails} />
          </>
        )}
      </div>
    </div>
  );
}

export default CocktailsPage;
