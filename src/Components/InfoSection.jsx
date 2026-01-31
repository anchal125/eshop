import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { serviceCards } from "../utils/Data"
import styles from "./InfoSection.module.css"

gsap.registerPlugin(ScrollTrigger);

export const InfoSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".card")
    cards.forEach((card) => {
      gsap.from(card, {
        x: -1000,
        autoAlpha: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 90%",
          scrub: 5,
        },
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`cards ${styles.cards}`}>
      {serviceCards.map((item, index) => (
        <div className={`card ${styles.card}`} key={index}>
          <span style={{ fontSize: "2rem" }}>{item.icon}</span>
          <p>{item.title}</p>
          <small>{item.description}</small>
        </div>
      ))}
    </div>
  );
}; 
