import { memo } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo.jpg";

import s from "./Header.module.css";

const Header = () => (
  <div className={s.outer}>
    <div className={s.header}>
      <Link className={s.link} to="/">
        <p className={s.logo}>CocktailsPRO</p>
      </Link>
      <span className={s.subtitle}>Only the finest recipes!</span>
    </div>
    <img className={s.logoImg} src={logoImg} alt="CocktailsPRO" />
  </div>
);

export default memo(Header);
