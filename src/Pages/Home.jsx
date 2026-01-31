import { categories} from "../utils/Data"
import shopping1 from "../assets/shopping1.png"
import shopping2 from "../assets/shopping2.png"
import shopping3 from "../assets/shopping3.png"
import styles from "./Home.module.css"
import { InfoSection } from "../Components/InfoSection"
import { CategorySection } from "../Components/CategorySection"
import { Products } from "../Components/Products"
import { useGetProducts } from "../hooks/useGetProducts";
import { Link, useNavigate } from 'react-router-dom';
import { ScrollText } from "../Components/ScrollText"
import { useEffect, useState } from "react"
import { HiCursorClick } from "react-icons/hi";

export const Home = () => {
  const { products, loading, error } = useGetProducts();
  const [imageIndex,setImageIndex]=useState(0)
  const images=[shopping1,shopping2,shopping3]
  const navigate=useNavigate()

  useEffect(()=>{
    let id=setInterval(()=>{
      setImageIndex(prev => (prev + 1) % images.length)
    },3000)
    return ()=>{
      clearInterval(id)
    }
  },[])
  
  if(error){
    console.log(error.messsage)
    navigate("/error")
  }

  return (
    <div className={styles.home}>            
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
          <img src={images[imageIndex]} alt="shopping" />
          <div className={styles.text}>
            <small>Anchal| e-Shop</small>
            <h2>WELCOME TO E-SHOP</h2>
            <p>MILLION+ PRODUCTS</p>
            <Link to="/Shop"><button className="stheme">SHOP NOW</button></Link>
            <HiCursorClick className={styles.cursor} size={23} style={{position:"relative",right:"8px",top:"25px"}}/>
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
