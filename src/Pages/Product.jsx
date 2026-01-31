import styles from "./Product.module.css"
import { useDispatch } from "react-redux";
import { AddToCart } from "../redux/cartSlice";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {Loader} from "../Components/Loader"
import { toast } from 'react-toastify';

export const Product = () => {
  const dispatch = useDispatch();
  const [searchParams,setSearchParams]=useSearchParams()
  const selectedSize=searchParams.get("size") || ""
  const {id}=useParams()
  const navigate=useNavigate()
  const [loading,setLoading]=useState(true)
  const [product,setProduct]=useState()

  const handleSizeSelect = (size) => {
    setSearchParams({ size }); 
  };

  useEffect(()=>{
    const fetchProduct=async()=>{
      try {
        let response= await fetch(`https://fakestoreapi.com/products/${id}`)
        if(!response.ok){
          throw new Error("error")
        }
        response=await response.json()
        setProduct(response)
      } catch (error) {
        console.log(error.messsage)
        navigate("/error")
      } finally{
        setLoading(false)
      }

    }
    fetchProduct()
  },[])

  
  if (loading) {
    return <Loader />;
  }
  

  return (
    <div className={styles.divisions}>
      <div className={styles.left}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.right}>
        <h2>{product.title}</h2>
        <div style={{marginBottom:".4rem"}} className={styles.rating}>
          {product.rating.rate}⭐ | {product.rating.count} ratings
        </div>
        <hr />
        {product.category.includes("clothing") && 
        <div className={styles.sizeselect}>
          <p><b>Select Size:</b></p>
          <div className={styles.sizes}>
            {["S", "M", "L"].map((size) => (
              <p
                key={size}
                onClick={() => handleSizeSelect(size)}
                style={{
                  border: selectedSize === size ? "2px solid blue" : "1px solid gray",
                  cursor: "pointer",
                  padding: "4px 8px"
                }}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
        }
        <div className={styles.price}><b>${product.price}</b> <span>MRP</span> <span style={{textDecoration:"line-through"}}>${(product.price+50).toFixed(2)}</span></div>
        <small style={{display:"block",color:"rgb(11, 55, 157)",marginBottom:".9rem",fontWeight:'bold'}}>inclusive of all taxes</small>
        <button onClick={()=>{dispatch(AddToCart(product));toast("item added to cart")}} className="stheme">
          Add to Cart <HiMiniShoppingCart size={20}/>
        </button>

      </div>

    </div>
  )
}
