import styles from "./Content.module.css";
import { ContentProps } from "./types";

const Content = ({ children }: ContentProps) => (
  <div className={styles.content}>{children}</div>
);

export default Content;
