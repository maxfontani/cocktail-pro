import { Header, Content, Footer } from "../components/index";

import { LayoutProps } from "./types";
import styles from "./Layout.module.css";

export default function Layout({ children }: LayoutProps) {
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
