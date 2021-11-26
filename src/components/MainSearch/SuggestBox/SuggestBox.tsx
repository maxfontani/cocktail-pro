import { Link } from "react-router-dom";
import { Suggestions } from "../types";

import s from "./SuggestBox.module.css";

function SuggestBox(props: { suggestions: Suggestions }) {
  const list = props.suggestions;
  return list.length !== 0 ? (
    <div className={s.outer}>
      {list.map((item) => (
        <li key={item.id} className={s.listItem}>
          <Link className={s.listItemLink} to={item.url}>
            {item.name}
          </Link>
        </li>
      ))}
    </div>
  ) : null;
}

export default SuggestBox;
