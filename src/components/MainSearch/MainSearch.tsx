import React, { useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import AutoSuggestBox from "./AutoSuggestBox/AutoSuggestBox";
import { selectAutoSuggestions } from "../../store/cocktails/selectors";
import { suggestCocktailsByName } from "../../store/cocktails/thunks";

import searchImg from "../../images/search.png";
import { debounce } from "../../utils/helpers";

import styles from "./MainSearch.module.css";
import { MainSearchProps } from "./types";

function MainSearch({ handleSearchSubmit }: MainSearchProps) {
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useAppDispatch();
  const autoSuggestions = useAppSelector(selectAutoSuggestions);

  function makeSearchRequest(name: string) {
    dispatch(suggestCocktailsByName({ searchText: name, sugLimit: 5 }));
  }

  const makeSearchRequestDebounced = debounce(makeSearchRequest, 500);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      if (input) {
        makeSearchRequestDebounced(input);
      }
      setSearchText(input);
    },
    [],
  );

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearchSubmit(searchText);
  }, []);

  return (
    <>
      <form className={styles.mainSearchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          value={searchText}
          onChange={handleInputChange}
          type="search"
        />
        <button
          className={styles.searchBtn}
          onClick={() => handleSubmit}
          type="submit"
        >
          <img className={styles.searchBtnImg} src={searchImg} alt="Search" />
        </button>
      </form>
      <AutoSuggestBox sugList={autoSuggestions} />
    </>
  );
}

export default MainSearch;
