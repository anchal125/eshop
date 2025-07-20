import React from 'react'
import { useDispatch } from 'react-redux'
import { AddToCart, DecrementCount, RemoveFromCart } from '../redux/cartSlice'
import styles from "../Pages/Cart.module.css"

export const CartProduct = ({item}) => {
  const dispatch=useDispatch()
  return (
    <tr>
      <td>
        <div className={styles.cartProduct}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>

        </div>
      </td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <div className={styles.changeQuantity}>
          <button onClick={()=>dispatch(AddToCart(item))}>+</button>
          <span style={{textAlign:"center"}}>{item.count}</span>
          <button onClick={()=>dispatch(DecrementCount(item))}>-</button>
        </div>
      </td>
      <td>${(item.count*item.price).toFixed(2)}</td>
      <td style={{cursor:'pointer',userSelect:"none"}} onClick={()=>{dispatch(RemoveFromCart(item))}}>🗑️</td>
    </tr>
  )
}
