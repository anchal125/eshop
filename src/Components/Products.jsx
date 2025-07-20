import React from 'react'
import styles from "./Products.module.css"
import { AddToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux';

export const Products = ({products}) => {
  const dispatch = useDispatch();
  
  return (
    <div className={`cards ${styles.products}`}>
      {products.map(item=>
        <div key={item.id} className={`card ${styles.productCard}`}>
          <img src={item.image} alt={item.title}/>
          <p className={styles.title}>{item.title}</p>
          <p>${item.price}</p>
          <button onClick={()=>dispatch(AddToCart(item))} className="stheme" style={{float:"right"}}>
            <p className={styles.plus}>+</p>
            <p className={styles.add}>Add to Cart</p>
          </button>

        </div>

      )}
    </div>
  )
}
