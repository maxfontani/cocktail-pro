import { ChangeHandler, FieldError } from "react-hook-form";

type Errors = {
  login?: FieldError | undefined;
  password?: FieldError | undefined;
};

export type FormRegister = {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
  ref: React.Ref<any>;
};

export type Props = {
  tag: keyof Errors;
  label: string;
  register: FormRegister;
  errors: Errors;
  isSubmitting: boolean;
};
