import Head from "next/head";
import Header from "@components/Header";
import styles from "./Layout.module.css";

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <div className={styles.layout} {...props}>
        <section>
          <div>{children}</div>
        </section>
        <footer className={styles.footer}>
          Built by me! <a href="https://www.brianhan.co/">brianhan.co</a>
        </footer>
      </div>
    </>
  );
}
