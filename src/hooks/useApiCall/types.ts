export type RootState<F> = {
  isLoading: boolean;
  isError: boolean;
  data: F | undefined;
};

export type Action = { type: "FETCH_INIT" | "FETCH_FAILURE" };
export type ActionWithPayload<P> = {
  type: "FETCH_SUCCESS";
  payload: P | undefined;
};

export type ApiCall<D> = (...args: any[]) => Promise<D | undefined>;
