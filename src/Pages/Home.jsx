import { categories} from "../utils/Data"
import shopping from "../assets/shopping.png"
import styles from "./Home.module.css"
import { InfoSection } from "../Components/InfoSection"
import { CategorySection } from "../Components/CategorySection"
import { Products } from "../Components/Products"
import { useGetProducts } from "../hooks/useGetProducts";
import { Link } from 'react-router-dom';
import { ScrollText } from "../Components/ScrollText"

export const Home = () => {
  const { products, loading, error } = useGetProducts();
  
  if(error){
    return <p>error</p>
  }

  return (
    <div>            
      <section className={styles.firstSection}>
        <div className={styles.left}>
          <p className="stheme">SHOP BY CATEGORY</p>
            <ul>
              {categories.map((item,index)=>
                <li key={index}>{item}</li>
              )}
              
            </ul>

        </div>

        <div className={styles.right}>
          <img src={shopping} alt="shopping" />
          <div className={styles.text}>
            <small>Anchal| e-Shop</small>
            <h2>WELCOME TO E-SHOP</h2>
            <p>MILLION+ PRODUCTS</p>
            <Link to="/Shop"><button className="stheme">SHOP NOW</button></Link>
          </div>
        </div>
      </section>

      <ScrollText/>

      <InfoSection/>

      <CategorySection/>

      {loading?<div className={styles.products}>Loading...</div>:
      <>
        <div className={styles.products}>
          <h2>Top Products</h2>
          <Products products={products.slice(0, 5)}></Products>
        </div>
        
        <div className={styles.products}>
          <h2>Shop</h2>
          <Products products={products}></Products>
        </div>
        
        
      </>
      
      }


    </div>
  )
}
