import { useAppDispatch } from "../../hooks/redux";
import {
  setCatFilter,
  setGlassFilter,
  setIngrFilter,
} from "../../store/filters/filtersSlice";
import {
  getCategories,
  getIngredients,
  getGlasses,
} from "../../services/calls";
import { getSelectOptions } from "../../utils/helpers";

import { MultiValue } from "react-select";
import { SelOption } from "../../utils/types";
import s from "./MainFilter.module.css";
import SelectFilter from "../SelectFilter/SelectFilter";

function MainFilter() {
  const dispatch = useAppDispatch();

  function loadCatOptions() {
    return getCategories().then(getSelectOptions);
  }

  function loadIngrOptions() {
    return getIngredients().then(getSelectOptions);
  }

  function loadGlassOptions() {
    return getGlasses().then(getSelectOptions);
  }

  const onCatsChange = (data: MultiValue<SelOption>) => {
    const filter = data.map((v) => v.value);
    dispatch(setCatFilter(filter));
  };

  const onIngrChange = (data: MultiValue<SelOption>) => {
    const filter = data.map((v) => v.value);
    dispatch(setIngrFilter(filter));
  };

  const onGlassChange = (data: MultiValue<SelOption>) => {
    const filter = data.map((v) => v.value);
    dispatch(setGlassFilter(filter));
  };

  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <SelectFilter
          label={"Categories..."}
          loadOptions={loadCatOptions}
          onChangeHandler={onCatsChange}
        />
        <SelectFilter
          label={"Ingredients..."}
          loadOptions={loadIngrOptions}
          onChangeHandler={onIngrChange}
        />
        <SelectFilter
          label={"Glasses..."}
          loadOptions={loadGlassOptions}
          onChangeHandler={onGlassChange}
        />
      </div>
    </div>
  );
}

export default MainFilter;
