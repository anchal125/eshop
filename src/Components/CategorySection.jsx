import { genderCategories } from "../utils/Data"
import styles from './CategorySection.module.css'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const CategorySection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".card", {
      x: 800,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: ".card",
        start: "top 93%", 
        end:"top 93%",        
        scrub:5,    
      },
    });

    const cards = gsap.utils.toArray(".card");
    cards.forEach(card => {
      card.addEventListener("mouseenter", () =>
        gsap.to(card, {scale:1.02, boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)", y: -14, duration: 0.3, ease: "power2.out" })
      );
      card.addEventListener("mouseleave", () =>
        gsap.to(card, {scale:1, boxShadow: "0px 0px 0px rgba(0,0,0,0)", y: 0, duration: 0.3, ease: "power2.out" })
      );
    });
  },{scope:containerRef});
  

  return (
    <div
      ref={containerRef}
      className={`cards ${styles.cards}`}
    >
      {genderCategories.map((item, index) => (
        <div className={`card ${styles.card}`} key={index}>
          <img src={item.image} alt={item.name} />
          <div className={styles.text}>
            <p>{item.name}</p>
            <small>view all</small>
          </div>
        </div>
      ))}
    </div>
  )
}

