import styles from "./About.module.css"
import about from "../assets/about.png"
import shopping from "../assets/shopping.mp4"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import { useRef } from "react"
gsap.registerPlugin(SplitText)

export const About = () => {
  const titleRef=useRef(null)

  useGSAP(() => {
    if (!titleRef.current) return;
    const split = new SplitText(titleRef.current, { type: "chars, words" });
    
    gsap.from(split.chars, {
      y: 100,
      duration: 1,
      autoAlpha: 0,
      color: "purple",
      delay: 1,
      stagger: {
        amount: .5,
        from: "random",
      }
    });

  })

  return (
    <div className={styles.about}>
      <video className={styles.bg} src={shopping} autoPlay loop muted ></video>
      <div className={styles.overlay}></div>
      <h1 ref={titleRef} className="titleText">
        About Us
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, numquam accusamus, mollitia consectetur beatae veniam et odit omnis nobis amet, dicta nam exercitationem rem ea aut quod a incidunt rerum. Cum, numquam accusamus, mollitia consectetur beatae veniam et odit omnis nobis amet, dicta nam exercitationem rem ea aut quod a incidunt rerum</p>
      <div className={styles.imgBox}>
        <img loading='lazy' src={about} alt="shopping" />
      </div>

    </div>
  )
}
