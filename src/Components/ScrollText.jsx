import { useGSAP } from "@gsap/react";
import styles from "./ScrollText.module.css";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { useRef, useState } from "react";

export const ScrollText = () => {
  const { y: scrollY } = useWindowScroll();
  const containerRef = useRef();
  const [prevScrollY, setPrevScrollY] = useState(0);

  useGSAP(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.children;

    gsap.set(children, {
      transform: 'translateX(-100%)'
    })

    if (scrollY > prevScrollY) {
      gsap.to(children, {
        transform: 'translateX(-200%)',
        ease: "none",
        duration: 2,
        repeat: -1,
      });
    } else {
      gsap.to(children, {
        transform: 'translateX(0%)',
        ease: "none",
        duration: 2,
        repeat: -1,
      });
    }

    setPrevScrollY(scrollY);
  }, [scrollY]);


  return (
    <div className={styles.scrollText} ref={containerRef}>
      {Array(18)
        .fill(0)
        .map((_, i) => (
          <p key={i}>EShop</p>
        ))}
    </div>
  );
};
