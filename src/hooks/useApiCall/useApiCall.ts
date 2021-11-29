import { useEffect, useReducer } from "react";
import createFetchReducer from "./reducer";

import { ApiCall, RootState } from "./types";

function useApiCall<D>(apiCall: ApiCall<D>, ...args: any[]) {
  const initialState: RootState<D> = {
    isLoading: false,
    isError: false,
    data: undefined,
  };
  const reducer = createFetchReducer<D>();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const result = await apiCall(...args);

        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result });
        }
      } catch (_) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [apiCall]);

  return {
    state: { isError: state.isError, isLoading: state.isLoading },
    data: state.data,
  };
}

export default useApiCall;
