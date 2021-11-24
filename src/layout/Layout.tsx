import { Header, Content, Footer } from "../components/index";

import styles from "./Layout.module.css";
type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </div>
    </div>
  );
}
