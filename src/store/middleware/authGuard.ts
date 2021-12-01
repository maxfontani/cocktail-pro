import useUserData from "../../hooks/useUserData/useUserData";
import { AUTH_ACTIONS } from "../auth/authSlice";

import { Middleware } from "redux";

const authGuard: Middleware = (store) => (next) => (action) => {
  const state = store.getState();
  const login = state.auth.login;
  const isAuthAction = AUTH_ACTIONS.includes(action.type);
  if (isAuthAction) {
    if (login) {
      const { toggleFav, addHistory } = useUserData(login);
      switch (action.type) {
        case AUTH_ACTIONS[0]: {
          addHistory(action.payload);
          break;
        }
        case AUTH_ACTIONS[1]: {
          toggleFav(action.payload.id, action.payload.fav);
          break;
        }
      }
      next(action);
    }
  } else {
    next(action);
  }
};

export default authGuard;
