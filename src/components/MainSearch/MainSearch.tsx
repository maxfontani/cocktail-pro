import React, { useState, useCallback, useEffect } from "react";
import { useAppSelector } from "../../hooks/redux";
import { selectLogin } from "../../store/auth/selectors";
import useUserData from "../../hooks/useUserData/useUserData";
import SuggestBox from "./SuggestBox/SuggestBox";
import { format } from "date-fns";
import { debounce, getSearchUrl } from "../../utils/helpers";

import s from "./MainSearch.module.css";
import { MainSearchProps, Suggestions } from "./types";
import { FormEvent } from "hoist-non-react-statics/node_modules/@types/react";

const DEBOUNCE_MS = 500;

function MainSearch({
  onSearchSubmit,
  getSuggestionsAsync,
  sugLimit,
}: MainSearchProps) {
  let isMounted = true;
  const login = useAppSelector(selectLogin);
  const [searchText, setSearchText] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestions>([]);

  const fetchSuggestions = (search: string) => {
    getSuggestionsAsync(search, sugLimit)
      .then((list) => {
        if (isMounted) {
          setSuggestions(list);
        }
      })
      .catch(() => {
        if (isMounted) {
          setSuggestions([]);
        }
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

  useEffect(() => {
    return () => {
      isMounted = false;
    };
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      setSearchText(input);
    },
    [],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (login) {
      const { addHistory } = useUserData(login);
      const date = Date();

      addHistory({ date, search: searchText, url: getSearchUrl(searchText) });
    }

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
