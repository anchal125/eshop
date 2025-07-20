import { genderCategories } from "../utils/Data"
import styles from './CategorySection.module.css'

export const CategorySection = () => {
  return (
    <div
      className={`cards ${styles.cards}`}
      style={{ gridTemplateColumns: `repeat(${genderCategories.length}, 1fr)` }}
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

