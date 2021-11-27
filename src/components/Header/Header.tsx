import { AuthButtons, Logo } from "../";
import { memo } from "react";

import s from "./Header.module.css";

const Header = () => (
  <div className={s.outer}>
    <Logo />
    <AuthButtons />
  </div>
);

export default memo(Header);
