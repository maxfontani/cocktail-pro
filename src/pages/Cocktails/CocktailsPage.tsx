import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import useQuery from "../../hooks/useQuery/useQuery";
import { selectAllCocktails } from "../../store/cocktails/selectors";
import { resetFilters } from "../../store/filters/filtersSlice";
import { resetCocktailsState } from "../../store/cocktails/cocktailsSlice";
import { searchCocktails } from "../../store/cocktails/thunks";
import { suggestCocktailsByName } from "../../services/calls";
import { CocktailInfo, CocktailHub } from ".";
import { MainFilter, MainSearch } from "../../components";

import s from "./CocktailsPage.module.css";

function CocktailsPage() {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const cocktails = useAppSelector(selectAllCocktails);
  const { getSearchQuery, searchParams } = useQuery();
  const search = searchParams.get("search") || "";

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
      dispatch(resetCocktailsState());
    };
  }, []);

  useEffect(() => {
    const searchQuery = getSearchQuery();

    dispatch(searchCocktails(searchQuery));
  }, [searchParams]);

  return (
    <div className={s.outer}>
      {id ? (
        <CocktailInfo id={id} />
      ) : (
        <div className={s.flexCol}>
          <div className={s.searchOuter}>
            <MainSearch getSuggestionsAsync={suggestCocktailsByName} />
            <MainFilter />
          </div>
          <CocktailHub cocktails={cocktails} search={search} />
        </div>
      )}
    </div>
  );
}

export default CocktailsPage;
