import { AuthForm } from "../../components";

import { FormValues } from "../../components/Forms/AuthForm/types";
import s from "./RegisterPage.module.css";

function RegisterPage() {
  const submitFormHandler = (data: FormValues) => {
    console.log("REG DATA:", data);
  };

  return (
    <div className={s.outer}>
      <div className={s.form}>
        <AuthForm
          title="Create a new account:"
          type="register"
          submitFormHandler={submitFormHandler}
        />
      </div>
    </div>
  );
}

export default RegisterPage;
