import { Link } from "react-router-dom";

import { Props } from "./types";
import s from "./UserPanel.module.css";

function UserPanel({ login }: Props) {
  if (!login) return null;

  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <div className={s.info}>{login}</div>
        <div className={s.links}>
          <Link to="/history">History</Link>
          <Link to="/favs">Favorites</Link>
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
