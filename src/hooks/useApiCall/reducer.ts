import { Action, ActionWithPayload, RootState } from "./types";

const createFetchReducer =
  <D>() =>
  (
    state: RootState<D>,
    action: Action | ActionWithPayload<D>,
  ): RootState<D> => {
    switch (action.type) {
      case "FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  };

export default createFetchReducer;
