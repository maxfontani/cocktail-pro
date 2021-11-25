import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { selectAutoSuggestions } from "../../store/cocktails/selectors";
import { suggestCocktailsByName } from "../../store/cocktails/thunks";
import AutoSuggestBox from "./AutoSuggestBox/AutoSuggestBox";
import { debounce } from "../../utils/helpers";
import searchImg from "../../images/search.png";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input) {
      makeSearchRequestDebounced(input);
    }
    setSearchText(input);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearchSubmit(searchText);
  };

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
