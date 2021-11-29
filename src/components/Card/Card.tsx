import { memo } from "react";
import { NavLink } from "react-router-dom";

import s from "./Card.module.css";
import { Props } from "./types";

const Card = ({ name, url, image }: Props) => (
  <NavLink className={s.card} to={url}>
    <div className={s.cardTitle}>{name}</div>
    <img className={s.cardImg} src={image} />
  </NavLink>
);

export default memo(Card);
