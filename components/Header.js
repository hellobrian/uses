import Link from "next/link";
import YuzuIcon from "@components/YuzuIcon";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.link}>
            <YuzuIcon></YuzuIcon>
            <h1 className={styles.linkText}>yuuzus</h1>
          </a>
        </Link>
      </nav>
    </header>
  );
}
