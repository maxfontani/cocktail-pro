import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../hooks/redux";
import { selectFavs, selectLogin } from "../../store/auth/selectors";
import FavsHub from "./FavsHub/FuvsHub";

import s from "./FavsPage.module.css";

function FavsPage() {
  const nav = useNavigate();
  const login = useAppSelector(selectLogin);
  const favs = useAppSelector(selectFavs);

  useEffect(() => {
    if (!login) {
      nav("/register");
    }
  }, [login]);

  return (
    <div className={s.outer}>
      <div className={s.title}>
        <h2>My favorites:</h2>
        <hr />
      </div>
      <FavsHub favsArr={Object.entries(favs)} />
    </div>
  );
}

export default FavsPage;
