import React, { useEffect } from 'react'
import { Products } from '../Components/Products'
import styles from "../Components/Products.module.css"
import noProducts from "../assets/noProducts.png"
import { useGetProducts } from "../hooks/useGetProducts";

export const Shop = ({input}) => {
  const { products, loading, error } = useGetProducts();
  const filteredProducts = input.trim()
  ? products.filter(item =>
      item.title.toLowerCase().includes(input.toLowerCase())
    )
  : products; 

  if(error){
    return <p>{error}</p>
  }

  if(loading){
    return <p>Loading...</p>

  }
  

  return (
    <div className={styles.products}>
      <h2 style={{textAlign:"center"}}>Shop</h2>
      {
        filteredProducts.length?
        <Products products={filteredProducts}></Products>:
        <img className="displayImg" src={noProducts} alt="no products found"/>


      }
      
    </div>
  )
}
