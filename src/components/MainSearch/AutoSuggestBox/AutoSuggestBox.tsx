import styles from "./AutoSuggestBox.module.css";
import { Props } from "./types";

function AutoSuggestBox(props: { sugList: Props[] }) {
  const list = props.sugList;
  return list.length !== 0 ? (
    <div className={styles.outer}>
      {list.map((drink) => (
        <li key={drink.id}>{drink.name}</li>
      ))}
    </div>
  ) : null;
}

export default AutoSuggestBox;
