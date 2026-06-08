import React, { useRef } from "react";
import styles from "./Products.module.css";
import { AddToCart } from "../redux/cartSlice";
import { addToWishList } from "../redux/wishListSlice";
import { useDispatch } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { toast } from "react-toastify";

import { ProductCard } from "./ProductCard";

gsap.registerPlugin(ScrollTrigger);

export const Products = ({ products }) => {
  const dispatch = useDispatch();
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.utils.toArray(".card").forEach((card) => {
        gsap.from(card, {
          y: 100,
          autoAlpha: 0,
          duration: 0.5,
          scrollTrigger: card,
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={`cards ${styles.products}`}>
      {products.map((item) => (
        <ProductCard item={item} key={item.id}>
          <button
            className={`${styles.addToCart} accent`}
            onClick={() => {
              dispatch(AddToCart(item));
              toast(`${item.title} added to cart`);
            }}
            aria-label={`Add ${item.title} to cart`}
          >
            <span aria-hidden="true" className={styles.plus}>
              ➕
            </span>

            <span className={styles.add}>Add to Cart</span>
          </button>

          <button
            className={styles.addToWishlist}
            style={{
              background: "var(--accent-background)",
            }}
            onClick={() => {
              dispatch(addToWishList(item));
              toast(`${item.title} added to wishlist`);
            }}
            aria-label={`Add ${item.title} to wishlist`}
            title="Add to wishlist"
          >
            <span aria-hidden="true">🩶</span>
          </button>
        </ProductCard>
      ))}
    </div>
  );
};
