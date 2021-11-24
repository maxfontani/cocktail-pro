export function createDebounceFunction<F extends (...args: any[]) => any>(
  fn: F,
  ms: number,
) {
  let timeout: ReturnType<typeof setTimeout>;
  return function debouncedFn(...args: Parameters<F>) {
    const fnCall = () => {
      fn.apply(null, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
}
