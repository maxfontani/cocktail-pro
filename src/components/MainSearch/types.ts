export type MainSearchProps = {
  onSearchSubmit: (text: string) => void;
  getSuggestionsAsync: (
    searchText: string,
    limit: number,
  ) => Promise<Suggestions>;
  sugLimit: number;
};

export type Suggestions = Array<{
  id: string;
  name: string;
  url: string;
}>;
