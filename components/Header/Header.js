import React from "react";
import Link from "next/link";
import { YuzuIcon } from "./YuzuIcon";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.link}>
            <YuzuIcon></YuzuIcon>
            <h1 className={styles.linkText}>yuuz.</h1>
          </a>
        </Link>
      </nav>
    </header>
  );
}
