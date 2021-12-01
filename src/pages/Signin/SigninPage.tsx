import { useAppDispatch } from "../../hooks/redux";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useNavigate } from "react-router";
import { AuthForm } from "../../components";
import { signIn } from "../../store/auth/authSlice";

import { FormValues } from "../../components/Forms/AuthForm/types";
import s from "./SigninPage.module.css";

function SigninPage() {
  const [getUsers] = useLocalStorage("users");
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const submitFormHandler = (data: FormValues) => {
    let users = getUsers();
    if (
      users &&
      typeof users === "object" &&
      !Array.isArray(users) &&
      data.login in users &&
      data.password === users[data.login].password
    ) {
      const user = users[data.login];
      dispatch(signIn(data.login));
      nav("/", { replace: true });
    } else {
      // TODO: add err modal
      alert("Invalid login or password!");
    }
  };

  return (
    <div className={s.outer}>
      <div className={s.form}>
        <AuthForm
          title="Sign into your account:"
          type="signin"
          submitFormHandler={submitFormHandler}
        />
      </div>
    </div>
  );
}

export default SigninPage;
