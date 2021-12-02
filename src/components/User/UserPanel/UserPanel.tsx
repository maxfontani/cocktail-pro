import { Link } from "react-router-dom";

import { Props } from "./types";
import s from "./UserPanel.module.css";

function UserPanel({ login }: Props) {
  if (!login) return null;

  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <Link className={s.link} to="/history">
          History
        </Link>
        <Link className={s.link} to="/favs">
          Favorites
        </Link>
        <div className={s.info}>Hi, {login}!</div>
      </div>
    </div>
  );
}

export default UserPanel;
