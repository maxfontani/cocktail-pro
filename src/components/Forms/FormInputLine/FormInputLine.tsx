import { InputLine } from "../..";

import { Props } from "./types";
import s from "../Form.module.css";

function FormInputLine({ tag, label, register, errors, isSubmitting }: Props) {
  const { ref, name, onBlur, onChange } = register;
  return (
    <>
      <InputLine
        {...{ ref, name, onBlur, onChange }}
        label={label}
        invalid={errors[tag] ? "true" : "false"}
        disabled={isSubmitting}
      />
      {errors[tag] && <div className={s.formError}>{errors[tag]?.message}</div>}
    </>
  );
}

export default FormInputLine;
