import React, { useEffect, useState } from "react";
import { Products } from "../Components/Products";
import styles from "../Components/Products.module.css";
import { useGetProducts } from "../hooks/useGetProducts";
import { Loader } from "../Components/Loader";
import { useNavigate } from "react-router-dom";
import { useTextAnimation } from "../hooks/useTextAnimation";

export const Shop = ({ input }) => {
  const { products, loading, error } = useGetProducts();
  const [showLoader, setShowLoader] = useState(true);
  const navigate = useNavigate();

  useTextAnimation(!showLoader);

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
    ? products.filter((item) =>
        item.title.toLowerCase().includes(input.trim().toLowerCase()),
      )
    : products;

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error, navigate]);

  if (error) {
    return null;
  }

  return (
    <div className={styles.products}>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <h2 className="animateText" style={{ textAlign: "center" }}>
            Shop
          </h2>
          {filteredProducts.length ? (
            <Products products={filteredProducts} />
          ) : (
            <big
              style={{
                marginTop: "1rem",
                display: "block",
                textAlign: "center",
              }}
            >
              {" "}
              Sorry 😔 we could not find any matching results.{" "}
            </big>
          )}
        </>
      )}
    </div>
  );
};
