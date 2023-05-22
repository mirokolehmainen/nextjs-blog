import Link from 'next/link';
import styles from '/styles/Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}