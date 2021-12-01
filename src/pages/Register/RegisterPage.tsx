import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { AuthForm } from "../../components";

import { FormValues } from "../../components/Forms/AuthForm/types";
import s from "./RegisterPage.module.css";

function RegisterPage() {
  const [getUsers, setUsers] = useLocalStorage("users");

  const submitFormHandler = (data: FormValues) => {
    let users = getUsers();
    if (users && typeof users === "object" && !Array.isArray(users)) {
      if (data.login in users) {
        // TODO: add err modal
        alert("Login already exists!");
      } else {
        users[data.login] = { password: data.password, favs: {}, history: {} };
        setUsers(users);
      }
    } else {
      const newUsers = Object.create(null);
      const firstUser = {
        password: data.password,
        favs: {},
        history: {},
      };
      newUsers[data.login] = firstUser;
      setUsers(newUsers);
    }
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
