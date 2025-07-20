import styles from "./About.module.css"
import about from "../assets/about.png"

export const About = () => {
  return (
    <div className={styles.about}>
      <h1>
        About Us
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, numquam accusamus, mollitia consectetur beatae veniam et odit omnis nobis amet, dicta nam exercitationem rem ea aut quod a incidunt rerum. Cum, numquam accusamus, mollitia consectetur beatae veniam et odit omnis nobis amet, dicta nam exercitationem rem ea aut quod a incidunt rerum</p>
      <div className={styles.imgBox}>
        <img src={about} alt="shopping" />
      </div>
      
    </div>
  )
}
