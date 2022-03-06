import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Austin Running</h1>
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
        <Link className={styles.navLink} href="/about">
          <a className={styles.navLink}>About</a>
        </Link>
      </nav>
    </header>
  );
}
