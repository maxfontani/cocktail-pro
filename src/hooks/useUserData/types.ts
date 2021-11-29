export type Entry = string | { [key: string]: User } | Array<string>;

export type User = {
  password: string;
  favs: { [id: string]: FavItem };
  history: { [date: string]: HistoryItem };
};

export type FavItem = {
  title: string;
  image: string;
};

export type HistoryItem = {
  search: string;
  url: string;
};

export type UseUserData = (login: string) => {
  addHistory: (data: string, entry: HistoryItem) => void;
  toggleFav: (id: string, fav: FavItem) => void;
  getFavsTotal: () => number;
};
