import useLocalStorage from "../useLocalStorage/useLocalStorage";

import { Entry } from "../useUserData/types";

function useLoginData() {
  const [getLogin, setLogin] = useLocalStorage("login");
  const [getUsers, setUsers] = useLocalStorage("users");

  function getUsersData() {
    const users = getUsers();
    if (!users || typeof users !== "object" || Array.isArray(users)) return;

    return users;
  }

  function getLastLogin(): string | undefined {
    const login = getLogin();

    return signIn(login);
  }

  function setLastLogin(login: string) {
    setLogin(login);
  }

  function register(login: string, pass: string): string | undefined {
    const users = getUsersData();
    // do we have a Users obj?
    // add user to a new Users obj
    if (users) {
      // does login already exists?
      if (login in users) {
        return;
      } else {
        users[login] = { password: pass, favs: {}, history: [] };
        setUsers(users);
      }
    } else {
      const newUsers = Object.create(null);
      const firstUser = {
        password: pass,
        favs: {},
        history: [],
      };
      newUsers[login] = firstUser;
      setUsers(newUsers);
    }

    return login;
  }

  function signIn(login: Entry | null): string | undefined {
    const users = getUsers();

    if (
      !!login &&
      typeof login === "string" &&
      typeof users === "object" &&
      users !== null &&
      !Array.isArray(users) &&
      login in users
    ) {
      return login;
    }
  }

  return { register, signIn, getLastLogin, setLastLogin };
}

export default useLoginData;
