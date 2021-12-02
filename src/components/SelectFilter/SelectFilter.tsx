import AsyncSelect from "react-select/async";
import { MultiValueProps, OptionProps, components } from "react-select";

import { Props } from "./types";
import { SelOption } from "../../utils/types";
import s from "./SelectFilter.module.css";

const Option: any = (props: OptionProps) => {
  return (
    <components.Option {...props}>
      <div className={s.option}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label> {props.label}</label>
      </div>
    </components.Option>
  );
};

const MultiVal: any = (props: MultiValueProps<SelOption>) => {
  // const str = props
  //   .getValue()
  //   .map((v) => v.label)
  //   .join(", ");

  return <components.SingleValue {...props} />;
};

function SelectFilter({ loadOptions, onChangeHandler, label }: Props) {
  return (
    <AsyncSelect
      className={s.select}
      styles={{
        valueContainer: (css) => ({
          ...css,
          flexWrap: "nowrap",
        }),
      }}
      components={{ Option, MultiValue: MultiVal }}
      placeholder={label}
      defaultOptions
      isMulti
      cacheOptions
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      loadOptions={loadOptions}
      onChange={onChangeHandler}
    />
  );
}

export default SelectFilter;
