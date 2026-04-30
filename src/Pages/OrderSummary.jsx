import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./OrderSummary.module.css";
import { ResetCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { calculateShippingFee } from "../utils/helpers";
import { toast } from "react-toastify";

export const OrderSummary = ({ shippingAddress, cart }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  
  const checkout = location.state?.checkout;

  const [orderData, setOrderData] = useState(null);

  const { width, height } = useWindowSize();

  useEffect(() => {
    if (!checkout) {
      toast.error("Please complete checkout first");
      navigate("/checkout", { replace: true });
    }
  }, [checkout,navigate]);

  useEffect(() => {
    if (!checkout) return;

    const cartPrice = cart.totalPrice;
    const shipping = calculateShippingFee(cartPrice);

    const snapshot = {
      items: JSON.parse(JSON.stringify(cart.products)),
      shippingFee: shipping,
      totalPrice: cartPrice + shipping,
    };

    setOrderData(snapshot);
    dispatch(ResetCart());
  }, [checkout, dispatch]);

  if (!checkout){
    return null;
  }

  return (
    <div className={styles.orderpg}>
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={300}
      />

      <big>Thank you for your order</big>
      <p>Your order has been placed successfully.</p>

      {orderData && (
        <div className={styles.orderSummary}>
          <p><b>Order Summary</b></p>
          <p>Order no: {Date.now()}</p>

          <p><b>Shipping info</b></p>
          <p>{shippingAddress}</p>

          <p><b>Shipping Fee</b></p>
          <p>${orderData.shippingFee}</p>

          <p><b>Items Ordered</b></p>
          {orderData.items.map((item) => (
            <p key={item.id}>
              {item.title} x{item.count} <b>${item.price.toFixed(2)}</b>
            </p>
          ))}

          <p><b>Total Price: ${orderData.totalPrice.toFixed(2)}</b></p>
        </div>
      )}

      <Link to="/Shop">
        <button className="stheme">Continue Shipping</button>
      </Link>
    </div>
  );
};