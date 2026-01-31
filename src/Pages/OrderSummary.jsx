import {Link} from "react-router-dom"
import styles from  "./OrderSummary.module.css"
import { ResetCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Confetti from "react-confetti"
import { useWindowSize } from "react-use";

export const OrderSummary = ({shippingAddress,cart}) => {
  const dispatch=useDispatch()
  const [orderedItems, setOrderedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setOrderedItems(JSON.parse(JSON.stringify(cart.products)));
    setTotalPrice(cart.totalPrice);

    dispatch(ResetCart());
  }, []);

  return (
    <div className={styles.orderpg}>
      <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />
      <big>Thank you for your order</big>
      <p >Your order has been placed successfully.</p>
      <div className={styles.orderSummary}>
        <p><b>Order Summary</b></p>
        <p>Order no: {Date.now()}</p>

        <p><b>Shipping info</b></p>
        <p>{shippingAddress}</p>

        <p><b>Items Ordered</b></p>
        {orderedItems.map((item)=>
          <p key={item.title}>{item.title} x{item.count} <b>${item.price.toFixed(2)}</b></p>
        )}

        <p><b>Total Price: ${totalPrice.toFixed(2)} </b></p>

      </div>
      <Link to="/Shop"><button className="stheme">Continue Shipping</button></Link>
    </div>
  )
}
