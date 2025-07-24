import { useGSAP } from "@gsap/react"
import styles from "./ScrollText.module.css"
import { useWindowScroll } from "react-use"

export const ScrollText = () => {
  const { y:scrollY  } = useWindowScroll()

  useGSAP(()=>{

  },[scrollY])

  return (
    <div className={styles.scrollText}><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p><p>EShop</p></div>
  )
}
