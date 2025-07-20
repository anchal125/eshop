import { serviceCards } from "../utils/Data"
import styles from "./InfoSection.module.css"

export const InfoSection = () => {
  return (
    <div className={`cards ${styles.cards}`}>
      {serviceCards.map((item, index) => (
        <div className={`card ${styles.card}`} key={index}>
          {item.icon}
          <p>{item.title}</p>
          <small>{item.description}</small>
        </div>
      ))}
    </div>
  );
};
