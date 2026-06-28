import { useNavigate } from "react-router-dom";
import { CheckoutInfo } from "../Components/CheckoutInfo";
import styles from "./Checkout.module.css";
import { toast } from "react-toastify";
import { calculateShippingFee } from "../utils/helpers";
import { useState } from "react";

export const Checkout = ({ shippingFormData, shippingAddress, cart }) => {
  const { products, totalPrice: cartPrice } = cart;
  const [paymentMethod, setPaymentMethod] = useState(null);
  const navigate = useNavigate();
  const isCartEmpty = cart.products.length === 0;
  const shippingFee = calculateShippingFee(cartPrice);
  const finalTotal = cart.totalPrice + shippingFee;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCartEmpty || !paymentMethod) return;
    if (shippingAddress) {
      navigate("/order", {
        replace: true,
        state: {
          checkout: true,
          orderData: {
            items: structuredClone(cart.products),
            shippingFee: calculateShippingFee(cart.totalPrice),
            totalPrice: cart.totalPrice + calculateShippingFee(cart.totalPrice),
            orderId: Date.now(),
          },
        },
      });
      toast.info("Order placed");
    } else {
      toast.error("Fill shipping/billing details");
    }
  };

  const handleplaceOrder = () => {
    if (isCartEmpty) {
      toast.error("Please add items to cart");
    }
    if (!paymentMethod) {
      toast.error("Select a Payment Method");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.checkout}>
      <h2>Checkout</h2>
      <div className={styles.divisions}>
        <div className={styles.checkoutLeft}>
          <CheckoutInfo
            shippingFormData={shippingFormData}
            setPaymentMethod={setPaymentMethod}
            paymentMethod={paymentMethod}
          />
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
            className={`accent ${isCartEmpty || !paymentMethod ? styles.disabledBtn : ""}`}
            onClick={handleplaceOrder}
          >
            Place an Order
          </button>
        </div>
      </div>
    </form>
  );
};
