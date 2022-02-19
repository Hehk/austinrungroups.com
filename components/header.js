import Link from "next/link";
import styles from "../styles/Header.module.css";
const spreadsheetLink =
  "https://docs.google.com/spreadsheets/d/1cy2U3JYRbCHj-KI-eszUZH2b5ZKNB5IJ2awiAny2Y8g/edit?usp=sharing";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Austin Run Groups</h1>
      <nav>
        <Link href="/">
          <a className={styles.navLink}>Home</a>
        </Link>
        <Link href="/groups">
          <a className={styles.navLink}>Groups</a>
        </Link>
        <Link className={styles.navLink} href="/events">
          <a className={styles.navLink}>Events & Races</a>
        </Link>
        <Link className={styles.navLink} href="/contact">
          <a className={styles.navLink}>Contact</a>
        </Link>
        <Link className={styles.navLink} href={spreadsheetLink}>
          <a className={styles.navLink}>Spreadsheet</a>
        </Link>
      </nav>
    </header>
  );
}
