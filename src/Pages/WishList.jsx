import { useDispatch, useSelector } from "react-redux";
import styles from "./WishList.module.css"
import { AddToCart } from "../redux/cartSlice";
import { removeFromWishList } from "../redux/wishListSlice";
import { useNavigate } from "react-router-dom";
import { useLocalStorageSync } from "../hooks/UseLocalStorageSync";
import { BiSolidShoppingBags } from "react-icons/bi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { toast } from "react-toastify";

export const WishList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let wishList = useSelector(state => state.wishList)
  let { products, totalItems } = wishList

  useGSAP(() => {
    gsap.fromTo(
      ".Icon",
      { rotation: -7, transformOrigin: "50% 0%" },
      {
        rotation: 7,
        transformOrigin: "50% 0%",
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "sine.inOut"
      }
    )
  })

  useLocalStorageSync("wishList", wishList)

  const handleClick = (item) => {
    navigate(`/Product/${item.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')}/${item.id}`)
  }

  if (totalItems == 0) {
    return <div className={styles.emptyList}>
      <BiSolidShoppingBags className={`Icon ${styles.Icon}`} style={{ color: "orange" }} />
      <h3>The wishlist is empty.</h3>
    </div>

  }

  return (
    <div>
      <h3>My Wishlist - {totalItems} </h3>
      <div className={`cards ${styles.cards}`}>
        {products.map(item =>
          <div className={`card ${styles.card}`} onClick={() => handleClick(item)}>
            <img src={item.image} alt={item.title} />
            <p className={styles.title}>{item.title}</p>
            <p>${item.price}</p>
            <div className={styles.buttons}>
              <button onClick={(e) => {
                e.stopPropagation();
                dispatch(AddToCart(item));
                dispatch(removeFromWishList(item.id));
                toast("item added to cart")
              }} className="stheme">
                Add to Cart
              </button>
              <span onClick={(e) => {
                e.stopPropagation();
                dispatch(removeFromWishList(item.id));
                toast("removed from wishlist")
              }}>🗑️</span>
            </div>


          </div>
        )}
      </div>

    </div>
  )
}
