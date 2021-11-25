import { memo } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo.jpg";

import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.outer}>
    <div className={styles.header}>
      <Link className={styles.link} to="/">
        <p className={styles.logo}>CocktailsPRO</p>
      </Link>
      <span className={styles.subtitle}>Only the finest recipes!</span>
    </div>
    <img className={styles.logoImg} src={logoImg} alt="CocktailsPRO" />
  </div>
);

export default memo(Header);
