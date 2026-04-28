import React, { useRef } from 'react'
import styles from "./Products.module.css"
import { AddToCart } from '../redux/cartSlice'
import { addToWishList } from "../redux/wishListSlice";
import { useDispatch } from 'react-redux';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

gsap.registerPlugin(ScrollTrigger);

export const Products = ({products}) => {
  const dispatch = useDispatch();
  const containerRef=useRef()
  const navigate=useNavigate()

  const handleClick=(item)=>{
    navigate(`/Product/${item.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') 
      .replace(/(^-|-$)+/g, '')}/${item.id}`)
  }
  
  useGSAP(()=>{
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.from(card, {
      y: 100,
      autoAlpha:0,
      duration: .5,
      scrollTrigger: card
    });
    })
    
  },{scope:containerRef})

  return (
    <div ref={containerRef} className={`cards ${styles.products}`}>
      {products.map(item=>
        <div onClick={()=>handleClick(item)} key={item.id} className={`card ${styles.productCard}`}>
          <img loading='lazy' className='productimg' src={item.image} alt={item.title}/>
          <p className={styles.title}>{item.title}</p>
          <p>${item.price}</p>
          <div className={styles.buttons}>
            <button onClick={(e)=>{
              e.stopPropagation();
              dispatch(AddToCart(item));
              toast("item added to cart")}} className="stheme">
              <p className={styles.plus}>➕</p>
              <p className={styles.add}>Add to Cart</p>
            </button>
            <button style={{background:'var(--accent-background)'}} onClick={(e)=>{
              e.stopPropagation();
              dispatch(addToWishList(item));
              toast("item added to wishlist")}}>
                🩶
            </button>
          </div>
        </div>

      )}
    </div>
  )
}
