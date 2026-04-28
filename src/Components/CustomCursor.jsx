import gsap from 'gsap';
import styles from './CustomCursor.module.css'
import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef=useRef()

  useEffect(() => {
    const handleMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.x + 10 ,
        y: e.y + 10,
        duration: 1,
        ease: "back.out",
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);


  return (
    <div ref={cursorRef} className={styles.cursor}></div>
  )
}