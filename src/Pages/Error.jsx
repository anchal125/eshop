import { Link } from "react-router-dom";
import shared from "./StatusPage.module.css";
import styles from "./Error.module.css";

export const Error = () => {
  return (
    <div className={shared.page}>
      <div className={shared.content}>
        <p className={shared.code}>!</p>
        <h1>Something went wrong</h1>
        <p>
          We could not load the data. Please check your connection and try
          again.
        </p>
        <div className={styles.actions}>
          <Link to="/" className={shared.link}>
            Go to Home
          </Link>
          <Link to="/shop" className={shared.link}>
            Go to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};
