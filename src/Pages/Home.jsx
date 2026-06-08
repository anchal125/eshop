import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

import { categories } from "../utils/data";
import shopping1 from "../assets/shopping1.png";
import shopping2 from "../assets/shopping2.png";
import shopping3 from "../assets/shopping3.png";
import styles from "./Home.module.css";
import { InfoSection } from "../Components/InfoSection";
import { CategorySection } from "../Components/CategorySection";
import { Products } from "../Components/Products";
import { useGetProducts } from "../hooks/useGetProducts";
import { Link, useNavigate } from "react-router-dom";
import { ScrollText } from "../Components/ScrollText";
import { useEffect, useState, useRef } from "react";
import { HiCursorClick } from "react-icons/hi";
import { useGSAP } from "@gsap/react";
import { useTextAnimation } from "../hooks/useTextAnimation";
import { Footer } from "../Components/Footer";

const images = [shopping1, shopping2, shopping3];

export const Home = () => {
  const { products, loading, error } = useGetProducts();
  const navigate = useNavigate();
  const img1Ref = useRef();
  const img2Ref = useRef();
  const [index, setIndex] = useState(0);
  const activeRef = useRef(1);
  const welcomeTextRef = useRef();

  useTextAnimation(!loading, true);

  useGSAP(() => {
    const split = new SplitText(welcomeTextRef.current, { type: "chars" });

    gsap.fromTo(
      split.chars,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.09,
        duration: 0.4,
        ease: "power3.out",
        delay: 2.5,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      },
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % images.length;

      const currentImg =
        activeRef.current === 1 ? img1Ref.current : img2Ref.current;

      const nextImg =
        activeRef.current === 1 ? img2Ref.current : img1Ref.current;

      nextImg.src = images[nextIndex];

      gsap.set(nextImg, { opacity: 0, scale: 1.1, x: "100%" });

      gsap.to(currentImg, {
        opacity: 0,
        scale: 1,
        duration: 1,
        x: "-100%",
        ease: "power2.in",
      });

      gsap.to(nextImg, {
        opacity: 1,
        scale: 1,
        duration: 1,
        x: 0,
        ease: "power3.out",
      });

      activeRef.current = activeRef.current === 1 ? 2 : 1;

      setIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error, navigate]);

  if (error) {
    return null;
  }

  return (
    <div className={styles.home}>
      <section className={styles.firstSection}>
        <div className={styles.left}>
          <p className="accent">SHOP BY CATEGORY</p>
          <ul>
            {categories.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <img
              ref={img1Ref}
              src={images[0]}
              alt=""
              className={styles.image}
            />
            <img ref={img2Ref} alt="" className={styles.image} />
            <div className={styles.gradientOverlay}></div>
          </div>
          <div className={styles.text}>
            <small>Anchal| e-Shop</small>
            <h2 ref={welcomeTextRef}>WELCOME TO E-SHOP</h2>
            <p>MILLION+ PRODUCTS</p>
            <Link to="/shop" className={`accent ${styles.shopNow}`}>
              SHOP NOW
            </Link>
            <HiCursorClick
              className={styles.cursor}
              size={23}
              style={{ position: "relative", right: "8px", top: "25px" }}
            />
          </div>
        </div>
      </section>

      <ScrollText />

      <InfoSection />

      <CategorySection />

      {loading ? (
        <div className={styles.products}>Loading...</div>
      ) : (
        <>
          <div className={styles.products}>
            <h2 className="animateText">Top Products</h2>
            <Products products={products.slice(0, 5)}></Products>
          </div>

          <div className={styles.products}>
            <h2 className="animateText">Shop</h2>
            <Products products={products}></Products>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};
