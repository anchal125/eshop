import { useNavigate } from "react-router-dom";
import { CheckoutInfo } from "../Components/CheckoutInfo";
import styles from "./Checkout.module.css";


export const Checkout = ({formData,shippingAddress,setModalOpen,cart}) => {
  const { products, totalPrice } = cart
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault(); 
    if(shippingAddress){
      navigate("/Order")
    }
    else{
      alert("Fill shipping/billing details")
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className={styles.checkout}>
      <h2>Checkout</h2>
      <div className={styles.divisions}>
        <div className={styles.checkoutLeft}>
          <CheckoutInfo formData={formData} setModalOpen={setModalOpen}/>
        </div>
 
        <div className={styles.checkoutRight}>
          <h4>Order Summary</h4>
          {
            products.map((product) => (
              <div className={styles.product} key={product.id}>
                <div className={styles.title}>
                  <img src={product.image} alt={product.title} />
                  <div className={styles.info}>
                    <p>{product.title}</p>
                    <small>${product.price.toFixed(2)} x {product.count}</small>
                  </div>
                </div>
                <p>${(product.price * product.count).toFixed(2)}</p>
              </div>
           ))
         }
          <b>Total Price: ${totalPrice.toFixed(2)}</b>
          <button className="stheme">Place an Order</button>
        </div>
      </div>
      
    </form>
  );
}
