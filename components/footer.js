import styles from '/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
      <div className={styles.contact}>
        <p>Email: example@example.com</p>
      </div>
      <div className={styles.siteInfo}>
        <p>&copy; 2023 Your own creative blog App. All rights reserved.</p>
      </div>
    </footer>
  );
}