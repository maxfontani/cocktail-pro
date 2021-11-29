import useLocalStorage from "../useLocalStorage/useLocalStorage";

import { FavItem, HistoryItem, UseUserData } from "./types";

const useUserData: UseUserData = function useUserData(login: string) {
  const [getUsers, setUsers] = useLocalStorage("users");

  function getUsersData() {
    const users = getUsers();
    if (!login || !users || typeof users !== "object" || Array.isArray(users))
      return;
    return users;
  }

  function toggleFav(id: string, fav: FavItem): void {
    const users = getUsersData();
    if (!users || !users[login]) return;

    if (id in users[login]["favs"]) {
      delete users[login]["favs"][id];
    } else {
      users[login]["favs"][id] = fav;
    }
    setUsers(users);
  }
  function addHistory(data: string, entry: HistoryItem): void {
    const users = getUsersData();
    if (!users || !users[login]) return;

    users[login]["history"][data] = entry;
    setUsers(users);
  }

  function getFavsTotal(): number {
    const users = getUsersData();
    if (!users || !users[login]) return 0;
    return Object.keys(users[login]["favs"]).length;
  }

  return { addHistory, toggleFav, getFavsTotal };
};

export default useUserData;
