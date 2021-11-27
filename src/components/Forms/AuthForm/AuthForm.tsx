import { useForm, SubmitHandler } from "react-hook-form";
import { nopeResolver } from "@hookform/resolvers/nope";
import { Space } from "../..";
import FormInputLine from "../FormInputLine/FormInputLine";
import { BasicAuthSchema } from "../shemas/BasicProductShema";

import { FormValues, Props } from "./types";
import s from "../Form.module.css";

export default function AuthForm({ title, type, submitFormHandler }: Props) {
  const defaultValues: FormValues = {
    login: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: nopeResolver(BasicAuthSchema),
    mode: "onChange",
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => submitFormHandler(data);
  const onError: any = (obj: any) => {
    console.log(obj);
  };

  return (
    <form
      id="form"
      className={s.formOuter}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className={s.formTitle}>{title}</div>
      <FormInputLine
        tag="login"
        label="Login:"
        register={register("login")}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      <FormInputLine
        tag="password"
        label="Password"
        register={register("password")}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      <Space size="xs" />
      <button className={s.formButton} type="submit" disabled={isSubmitting}>
        {type === "register" && "Register"}
        {type === "signup" && "Sign in"}
      </button>
    </form>
  );
}
