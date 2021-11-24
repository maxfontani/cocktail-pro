import styles from "./Content.module.css";

type Props = { children: React.ReactNode };

const Content = ({ children }: Props) => (
  <div className={styles.content}>{children}</div>
);

export default Content;
