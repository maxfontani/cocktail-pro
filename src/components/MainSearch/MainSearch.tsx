import React, { useState, useCallback, useEffect } from "react";
import SuggestBox from "./SuggestBox/SuggestBox";
import { debounce } from "../../utils/helpers";

import s from "./MainSearch.module.css";
import { MainSearchProps, Suggestions } from "./types";
import { SyntheticEvent } from "hoist-non-react-statics/node_modules/@types/react";

const DEBOUNCE_MS = 500;

function MainSearch({
  onSearchSubmit,
  getSuggestionsAsync,
  sugLimit,
}: MainSearchProps) {
  const [searchText, setSearchText] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestions>([]);
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
    debounce(fetchSuggestions, DEBOUNCE_MS),
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

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onSearchSubmit(searchText);
  };

  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <form
          id="search-form"
          className={s.mainSearchForm}
          onSubmit={handleSubmit}
        >
          <input
            className={s.searchInput}
            value={searchText}
            onChange={handleInputChange}
            type="search"
          />
          <SuggestBox suggestions={suggestions} />
        </form>
        <button
          className={s.searchBtn}
          form="search-form"
          onClick={handleSubmit}
          type="submit"
        />
      </div>
    </div>
  );
}

export default MainSearch;
