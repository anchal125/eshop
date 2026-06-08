import { useDispatch, useSelector } from "react-redux";
import styles from "./WishList.module.css";
import { AddToCart } from "../redux/cartSlice";
import { removeFromWishList } from "../redux/wishListSlice";
import { useLocalStorageSync } from "../hooks/useLocalStorageSync";
import { BiSolidShoppingBags } from "react-icons/bi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { toast } from "react-toastify";
import { useRef } from "react";
import { ProductCard } from "../Components/ProductCard";

export const WishList = () => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  let wishList = useSelector((state) => state.wishList);
  let { products, totalItems } = wishList;

  useGSAP(
    () => {
      gsap.fromTo(
        ".Icon",
        { rotation: -7, transformOrigin: "50% 0%" },
        {
          rotation: 7,
          transformOrigin: "50% 0%",
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: "sine.inOut",
        },
      );
    },
    { scope: containerRef },
  );

  useLocalStorageSync("wishList", wishList);

  if (totalItems == 0) {
    return (
      <div ref={containerRef} className={styles.emptyList}>
        <BiSolidShoppingBags
          className={`Icon ${styles.Icon}`}
          style={{ color: "orange" }}
        />
        <h3>The wishlist is empty.</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>My Wishlist - {totalItems} </h3>
      <div className={`cards ${styles.cards}`}>
        {products.map((item) => (
          <ProductCard item={item} key={item.id}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(AddToCart(item));
                dispatch(removeFromWishList(item.id));
                toast(`${item.title} added to cart`);
              }}
              className={`${styles.addToCart} accent`}
              aria-label={`Add ${item.title} to cart`}
            >
              Add to Cart
            </button>
            <button
              className={styles.removeFromWishList}
              aria-label={`remove ${item.title} from wishlist`}
              style={{ background: "transparent" }}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(removeFromWishList(item.id));
                toast(`${item.title} removed from wishlist`);
              }}
            >
              <span aria-hidden="true">🗑️</span>
            </button>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
