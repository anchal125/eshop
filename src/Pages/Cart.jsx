import cartimg from "../assets/cart.png";
import styles from "./Cart.module.css";
import { CartProduct } from '../Components/CartProduct';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export const Cart = ({cart,setModalOpen,shippingAddress,setModalType}) => {
  const { products, totalPrice, totalQuantity,totalItems } = cart;
  const navigate = useNavigate();
  const toCheckout=()=>{
    setModalOpen(true);
    setModalType("shipping")
    navigate("/checkout")
    toast.info("Fill your details to proceed")
  }

  return (
    <div>
      {totalQuantity === 0 ? (
        <img className="displayImg" src={cartimg} alt="empty cart" />
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
              {products.map(item => (
                <CartProduct key={item.id} item={item} />
              ))}
            </tbody>
          </table>

          <div className={styles.right}>
            <b>Cart Total</b>
            <p>Total Items: {totalItems}</p>
            <p>Shipping: Free</p>
            <p>Shipping to: <b>{shippingAddress}</b></p>
            <span onClick={()=>{setModalOpen(true);setModalType("shipping")}} style={{color:'blue',cursor:"pointer"}}>Change Shipping Address</span>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button onClick={toCheckout} className="stheme">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};
