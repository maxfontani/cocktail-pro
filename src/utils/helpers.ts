import { InitialState } from "../store/filters/types";
import { SelOption } from "./types";
type F = (...args: any[]) => any;

export function debounce(fn: F, ms: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function debouncedFn(...args: Parameters<F>) {
    const fnCall = () => {
      fn.apply(null, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
}

export function getCocktailUrl(id: string): string {
  return `/cocktails/${id}`;
}

export function getSearchUrl(text: string): string {
  return `/cocktails?search=${text}`;
}

export function getSelectOptions(arr: string[]): SelOption[] {
  return arr
    .sort((a, b) => a.localeCompare(b))
    .map((v) => ({ value: v, label: v }));
}

export function formFiltersQuery(filters: InitialState): string {
  let str = "";

  Object.entries(filters).forEach((el) => {
    const [key, val] = el;
    if (Array.isArray(val)) {
      if (val.length) {
        str = str.concat("&", key[0], "=", val.join());
      }
    } else {
      str = str.concat("&", key[0], "=", val);
    }
  });

  return new URLSearchParams(str).toString();
}
