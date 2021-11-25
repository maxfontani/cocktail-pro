import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export type MainSearchProps = {
  onSearchSubmit: (text: string) => void;
  getSuggestionsAsync: (
    searchText: string,
    limit: number,
  ) => Promise<AutoSuggestions>;
  sugLimit: number;
  debounceMs: number;
};

export type AutoSuggestions = Array<{
  id: string;
  name: string;
  url: string;
}>;
