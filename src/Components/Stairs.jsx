import styles from "./Stairs.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

export const Stairs = ({ children }) => {
  const { pathname } = useLocation();

  const stairsContainerRef = useRef();
  const stairsRef = useRef();
  const pageRef = useRef();

  useGSAP(
    () => {
      const stairs = stairsRef.current.children;
      const page = pageRef.current;
      const container = stairsContainerRef.current;

      // Prevent overlapping animations during rapid route changes.
      gsap.killTweensOf(stairs);
      gsap.killTweensOf(page);
      gsap.killTweensOf(container);

      gsap.set(container, { display: "block" });
      gsap.set(stairs, { y: 0, height: "100%" });
      gsap.set(page, { opacity: 0 });

      const tl = gsap.timeline();

      tl.from(stairs, {
        height: 0,
        stagger: -0.05,
      })
        .to(stairs, {
          y: "100%",
          stagger: -0.05,
        })
        .to(container, {
          display: "none",
        })
        .to(
          page,
          {
            opacity: 1,
            duration: 0.02,
            clearProps: "opacity",
          },
          "-=0.5",
        );
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div className={styles.stairsParent}>
      <div ref={stairsContainerRef} className={styles.stairsContainer}>
        <div ref={stairsRef} className={styles.stairs}>
          <div className={styles.stair}></div>
          <div className={styles.stair}></div>
          <div className={styles.stair}></div>
          <div className={styles.stair}></div>
          <div className={styles.stair}></div>
        </div>
      </div>

      <div ref={pageRef}>{children}</div>
    </div>
  );
};
