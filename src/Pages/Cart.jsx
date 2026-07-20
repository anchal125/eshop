import styles from "./Cart.module.css";
import { CartProduct } from "../Components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";
import { calculateShippingFee } from "../utils/helpers";

export const Cart = ({ cart, shippingAddress }) => {
  const { products, totalPrice: cartPrice, totalQuantity, totalItems } = cart;
  const navigate = useNavigate();
  const { setModalOpen } = useContext(ModalContext);

  const shippingFee = calculateShippingFee(cartPrice);
  const finalTotal = cart.totalPrice + shippingFee;

  const toCheckout = () => {
    setModalOpen("shipping");
    navigate("/checkout");
    setTimeout(() => {
      toast.info("Fill your details to proceed");
    }, 2000);
  };

  return (
    <div>
      {totalQuantity === 0 ? (
        <big
          style={{ marginTop: "1rem", display: "block", textAlign: "center" }}
        >
          {" "}
          Your cart is empty. Please add items to make me happy. 😃
        </big>
      ) : (
        <div className={styles.divisions}>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <CartProduct key={item.id} item={item} />
              ))}
            </tbody>
          </table>

          <div className={styles.right}>
            <b>Cart Total</b>
            <p>Total Items: {totalItems}</p>
            <p>Shipping: ${shippingFee}</p>
            <p>
              Shipping to: <b>{shippingAddress}</b>
            </p>
            <button
              onClick={() => {
                setModalOpen("shipping");
              }}
              style={{
                background: "transparent",
                color: "var(--accent-color)",
              }}
            >
              Change Shipping Address
            </button>
            <p>Total Price: ${finalTotal.toFixed(2)} </p>
            <button
              onClick={toCheckout}
              className={`accent ${styles.toCheckouBtn}`}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
