import { useNavigate } from "react-router-dom";
import { CheckoutInfo } from "../Components/CheckoutInfo";
import styles from "./Checkout.module.css";
import { toast } from "react-toastify";
import { calculateShippingFee } from "../utils/helpers";

export const Checkout = ({ shippingFormData, shippingAddress, cart }) => {
  const { products, totalPrice: cartPrice } = cart;
  const navigate = useNavigate();
  const isCartEmpty = cart.products.length === 0;
  const shippingFee = calculateShippingFee(cartPrice);
  const finalTotal = cart.totalPrice + shippingFee;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCartEmpty) return;
    if (shippingAddress) {
      navigate("/order", {
        replace: true,
        state: { checkout: true },
      });
      toast.info("Order placed");
    } else {
      toast.error("Fill shipping/billing details");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.checkout}>
      <h2>Checkout</h2>
      <div className={styles.divisions}>
        <div className={styles.checkoutLeft}>
          <CheckoutInfo shippingFormData={shippingFormData} />
        </div>

        <div className={styles.checkoutRight}>
          <h4>Order Summary</h4>
          {products.map((product) => (
            <div className={styles.product} key={product.id}>
              <div className={styles.title}>
                <img loading="lazy" src={product.image} alt={product.title} />
                <div className={styles.info}>
                  <p>{product.title}</p>
                  <small>
                    ${product.price.toFixed(2)} x {product.count}
                  </small>
                </div>
              </div>
              <p>${(product.price * product.count).toFixed(2)}</p>
            </div>
          ))}
          <b>Total Price: ${finalTotal.toFixed(2)}</b>
          <small>&nbsp;includes shipping</small>
          <button
            className={`accent ${isCartEmpty ? styles.disabledBtn : ""}`}
            onClick={() => {
              if (isCartEmpty) {
                toast.info("Please add items to cart");
                return;
              }
            }}
          >
            Place an Order
          </button>
        </div>
      </div>
    </form>
  );
};
