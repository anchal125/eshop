import React, { useEffect, useState } from 'react'
import { Products } from '../Components/Products'
import styles from "../Components/Products.module.css"
import noProducts from "../assets/noProducts.png"
import { useGetProducts } from "../hooks/useGetProducts";
import { Loader } from '../Components/Loader';
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(SplitText)

export const Shop = ({ input }) => {
  const { products, loading, error } = useGetProducts();
  const [showLoader, setShowLoader] = useState(true);
  const navigate=useNavigate()

  useGSAP(() => {
    if (!showLoader) {
      const split = new SplitText(".animateText", { type: "chars" });
      gsap.from(split.chars, {
        y: 100,
        opacity: 0,
        scale: 0.8,
        ease: "back.out(1.7)",
        duration: 1,
        stagger: 0.04,
      });
    }
  }, [showLoader]);

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
        item.title.toLowerCase().includes(input.toLowerCase())
      )
    : products;

  if (error) {
    console.log(error.message)
    navigate("/error")
  }

  if (showLoader) {
    return <Loader />;
  }

  return (
    <div className={styles.products}>
      <h2 className="animateText" style={{ textAlign: "center" }}>Shop</h2>
      {
        filteredProducts.length
          ? <Products products={filteredProducts} />
          : <img className="displayImg" src={noProducts} alt="no products found" />
      }
    </div>
  );
}
