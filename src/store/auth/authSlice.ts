/* eslint no-param-reassign: "off" */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import useUserData from "../../hooks/useUserData/useUserData";

import { InitialState, FavItem, HistoryItem } from "./types";

export const MAX_HISTORY = 10;

export const initialState: InitialState = {
  login: undefined,
  favs: {},
  history: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SIGNED_IN: (state, action: PayloadAction<string>) => {
      const login = action.payload;
      const { getFavs, getHistory } = useUserData(login);
      state.login = login;
      state.favs = getFavs();
      state.history = getHistory();
    },
    SIGNED_OUT: (state) => {
      state.login = undefined;
    },
    TOGGLED_FAV: (
      state,
      action: PayloadAction<{ id: string; fav: FavItem }>,
    ) => {
      const { id, fav } = action.payload;
      if (id in state.favs) {
        delete state.favs[id];
      } else {
        state.favs[id] = fav;
      }
    },
    ADDED_HISTORY: (state, action: PayloadAction<{ entry: HistoryItem }>) => {
      const { entry } = action.payload;
      state.history.unshift(entry);

      if (history.length > MAX_HISTORY) {
        state.history.pop();
      }
    },
  },
});

export const {
  SIGNED_IN: signIn,
  SIGNED_OUT: signOut,
  ADDED_HISTORY: addHistory,
  TOGGLED_FAV: toggleFav,
} = authSlice.actions;

export default authSlice.reducer;
