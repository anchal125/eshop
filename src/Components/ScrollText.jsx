import { useGSAP } from "@gsap/react";
import styles from "./ScrollText.module.css";
import gsap from "gsap";
import { useRef } from "react";

export const ScrollText = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const el = containerRef.current;

    gsap.to(el, {
      xPercent: -50,   
      ease: "none",
      duration: 8.5,      
      repeat: -1,
      force3D: true, 
    });

  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollText} ref={containerRef}>
        {Array.from({ length: 18 }, (_, i) => (
          <p key={i}>EShop</p>
        ))}
      </div>
    </div>
  );
};