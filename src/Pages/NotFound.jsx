import { Link } from "react-router-dom";
import styles from "./StatusPage.module.css";

export const NotFound = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <p className={styles.code}>404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className={styles.link}>
          Go to Home
        </Link>
      </div>
    </div>
  );
};
