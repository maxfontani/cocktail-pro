import { Link } from "react-router-dom";
import logoImg from "../../images/logo.jpg";

import s from "./Logo.module.css";

function Logo() {
  return (
    <div className={s.logoOuter}>
      <div className={s.info}>
        <Link className={s.link} to="/">
          <p className={s.logo}>CocktailsPRO</p>
        </Link>
        <span className={s.subtitle}>Only the finest recipes!</span>
      </div>
      <img className={s.logoImg} src={logoImg} alt="CocktailsPRO" />
    </div>
  );
}

export default Logo;
