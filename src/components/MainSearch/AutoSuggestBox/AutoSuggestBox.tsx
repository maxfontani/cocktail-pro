import { Link } from "react-router-dom";
import { AutoSuggestions } from "../types";

import styles from "./AutoSuggestBox.module.css";

function AutoSuggestBox(props: { sugList: AutoSuggestions }) {
  const list = props.sugList;
  return list.length !== 0 ? (
    <div className={styles.outer}>
      {list.map((item) => (
        <li key={item.id} className={styles.listItem}>
          <Link className={styles.listItemLink} to={item.url}>
            {item.name}
          </Link>
        </li>
      ))}
    </div>
  ) : null;
}

export default AutoSuggestBox;
