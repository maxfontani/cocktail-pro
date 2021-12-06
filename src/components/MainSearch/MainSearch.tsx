import React, { useState, useCallback, useEffect, FormEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { addHistory } from "../../store/auth/authSlice";
import { selectFiltersState } from "../../store/filters/selectors";
import SuggestBox from "./SuggestBox/SuggestBox";
import { debounce, getSearchUrl, getFiltersQuery } from "../../utils/helpers";

import { MainSearchProps, Suggestions } from "./types";
import s from "./MainSearch.module.css";

const DEBOUNCE_MS = 500;
const SUGGESTIONS_LIMIT = 5;

function MainSearch({ getSuggestionsAsync }: MainSearchProps) {
  let isMounted = true;
  const [qS] = useSearchParams();
  const defSearch = qS.get("search") || "";
  const [searchText, setSearchText] = useState<string>(defSearch);
  const [suggestions, setSuggestions] = useState<Suggestions>([]);
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFiltersState);

  useEffect(() => {
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    searchText ? fetchSuggestionsDebounced(searchText) : setSuggestions([]);
  }, [searchText]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(
      addHistory({
        date: Date(),
        search: searchText,
        url: getSearchUrl(searchText),
      }),
    );

    let url = `/cocktails?search=${searchText}`;
    url = url.concat("&", getFiltersQuery(filters));

    nav(url);
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      setSearchText(input);
    },
    [],
  );

  const fetchSuggestions = (search: string) => {
    getSuggestionsAsync(search, SUGGESTIONS_LIMIT)
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
