import React, { useState, useCallback, useEffect, FormEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router";
import { addHistory } from "../../store/auth/authSlice";
import { selectFiltersState } from "../../store/filters/selectors";
import SuggestBox from "./SuggestBox/SuggestBox";
import { debounce, getSearchUrl, formFiltersQuery } from "../../utils/helpers";

import s from "./MainSearch.module.css";
import { MainSearchProps, Suggestions } from "./types";

const DEBOUNCE_MS = 500;

function MainSearch({ getSuggestionsAsync, sugLimit }: MainSearchProps) {
  let isMounted = true;
  const [searchText, setSearchText] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestions>([]);
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const filters = useAppSelector(selectFiltersState);

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
    dispatch(
      addHistory({
        date: Date(),
        search: searchText,
        url: getSearchUrl(searchText),
      }),
    );
    const fQuery = formFiltersQuery(filters);
    console.log(`/cocktails?search=${searchText}&${fQuery}`);
    nav(`/cocktails?search=${searchText}&${fQuery}`);
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
