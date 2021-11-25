import React, { useState, useCallback, useEffect } from "react";
import AutoSuggestBox from "./AutoSuggestBox/AutoSuggestBox";
import { debounce } from "../../utils/helpers";

import styles from "./MainSearch.module.css";
import { MainSearchProps, AutoSuggestions } from "./types";

function MainSearch({
  onSearchSubmit,
  getSuggestionsAsync,
  sugLimit,
  debounceMs,
}: MainSearchProps) {
  const [searchText, setSearchText] = useState<string>("");
  const [suggestions, setSuggestions] = useState<AutoSuggestions>([]);
  const fetchSuggestions = (search: string) => {
    getSuggestionsAsync(search, sugLimit)
      .then((list) => {
        setSuggestions(list);
      })
      .catch(() => {
        setSuggestions([]);
      });
  };
  const fetchSuggestionsDebounced = useCallback(
    debounce(fetchSuggestions, debounceMs),
    [],
  );

  useEffect(() => {
    if (searchText) {
      fetchSuggestionsDebounced(searchText);
    } else {
      setSuggestions([]);
    }
  }, [searchText]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      setSearchText(input);
    },
    [],
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchSubmit(searchText);
  };

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <form
          id="search-form"
          className={styles.mainSearchForm}
          onSubmit={handleSubmit}
        >
          <input
            className={styles.searchInput}
            value={searchText}
            onChange={handleInputChange}
            type="search"
          />
          <AutoSuggestBox sugList={suggestions} />
        </form>
        <button
          className={styles.searchBtn}
          form="search-form"
          onClick={() => handleSubmit}
          type="submit"
        />
      </div>
    </div>
  );
}

export default MainSearch;
