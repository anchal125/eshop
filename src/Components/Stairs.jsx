import styles from "./Stairs.module.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useLocation } from "react-router-dom"
import { useRef } from "react"

export const Stairs = ({ children }) => {
  const { pathname } = useLocation()

  const stairsContainerRef = useRef()
  const stairsRef = useRef()
  const pageRef = useRef()

  useGSAP(() => {
    const tl = gsap.timeline()

    gsap.set(stairsContainerRef.current, {
      display: "block",
    })

    const stairs = stairsRef.current.children
    gsap.set(stairs, {
      y: 0,
    })

    tl.from(stairs, {
      height: 0,
      stagger: -0.15,
    }).to(stairs, {
      y: "100%",
      stagger: -0.15,
    })

    tl.to(stairsContainerRef.current, {
      display: "none",
    })

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.2,
    })

    return () => tl.kill();
  }, [pathname])

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
  )
}
