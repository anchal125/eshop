import React, { useEffect, useState } from 'react'
import { Products } from '../Components/Products'
import styles from "../Components/Products.module.css"
import { useGetProducts } from "../hooks/useGetProducts";
import { Loader } from '../Components/Loader';
import { useNavigate } from 'react-router-dom';
import { useTextAnimation } from '../hooks/useTextAnimation';


export const Shop = ({ input }) => {
  const { products, loading, error } = useGetProducts();
  const [showLoader, setShowLoader] = useState(true);
  const navigate=useNavigate()

  useTextAnimation(!showLoader)

  // to show loader created delay
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 2500); 
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const filteredProducts = input.trim()
    ? products.filter(item =>
        item.title.toLowerCase().includes(input.trim().toLowerCase())
      )
    : products;

  if (error) {
    navigate("/error")
  }

  if (showLoader) {
    return <Loader />;
  }

  return (
    <div className={styles.products} style={{ textAlign: "center" }}>
      <h2 className="animateText">Shop</h2>
      {
        filteredProducts.length
          ? <Products products={filteredProducts} />
          : <big style={{marginTop:'1rem',display:'inline-block'}}> Sorry 😔 we could not find any matching results. </big>
      }
    </div>
  );
}
