import React from "react";
import { useDispatch } from "react-redux";
import { AddToCart, DecrementCount, RemoveFromCart } from "../redux/cartSlice";
import styles from "../Pages/Cart.module.css";
import { toast } from "react-toastify";

export const CartProduct = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <div className={styles.cartProduct}>
          <img src={item.image} alt="" />
          <p>{item.title}</p>
        </div>
      </td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <div className={styles.changeQuantity}>
          <button
            aria-label="Increase quantity"
            onClick={() => dispatch(AddToCart(item))}
          >
            <span aria-hidden="true">+</span>
          </button>
          <span style={{ textAlign: "center" }}>{item.count}</span>
          <button
            aria-label="Decrease quantity"
            onClick={() => dispatch(DecrementCount(item))}
          >
            <span aria-hidden="true">-</span>
          </button>
        </div>
      </td>
      <td>${(item.count * item.price).toFixed(2)}</td>
      <td style={{ cursor: "pointer", userSelect: "none" }}>
        <button
          aria-label={`remove ${item.title} from cart`}
          style={{ background: "transparent" }}
          onClick={() => {
            dispatch(RemoveFromCart(item));
            toast(`${item.title} removed from cart`)
          }}
        >
          <span aria-hidden="true">🗑️</span>
        </button>
      </td>
    </tr>
  );
};
