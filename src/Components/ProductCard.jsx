import { getProductUrl } from "../utils/helpers";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ item, children }) => {
  return (
    <div className={`card ${styles.productCard}`}>
      <Link
        className={styles.productLink}
        to={getProductUrl(item)}
        aria-label={`${item.title}, price ${item.price} dollars`}
      >
        <img loading="lazy" className="productimg" src={item.image} alt="" />

        <p className={styles.title}>{item.title}</p>

        <p>${item.price}</p>
      </Link>
      {children}
    </div>
  );
};
