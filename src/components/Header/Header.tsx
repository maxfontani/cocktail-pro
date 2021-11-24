import { memo } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.header}>
    <Link className={styles.link} to="/">
      <p className={styles.logo}>CocktailsPRO</p>
    </Link>
    <span className={styles.subtitle}>Shake em' like a pro!</span>
  </div>
);

export default memo(Header);
