import React, { useState, useCallback } from "react";
import searchImg from "../../images/search.png";

import styles from "./MainSearch.module.css";
import { MainSearchProps } from "./types";

function MainSearch({ handleSearchSubmit }: MainSearchProps) {
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    [],
  );

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearchSubmit(searchText);
  }, []);

  return (
    <form className={styles.mainSearch} onSubmit={handleSubmit}>
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
  );
}

export default MainSearch;
