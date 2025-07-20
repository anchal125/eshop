import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import styles from './Navbar.module.css';
import { useSelector } from 'react-redux'

export const Navbar = ({input,setInput,setModalOpen,setModalType,name}) => {
  const navigate=useNavigate()
  const {totalQuantity}=useSelector(state=>state.cart)
  
  const handleSearch=()=>{
    navigate("/Shop")
  }
  return (
    <nav>
      <div className={styles.topdiv}>
        <img src="/logo.png" alt="" />
        <div className={styles.inputdiv}>
          <input value={input} type="text" placeholder='Search' onChange={e=>setInput(e.target.value)} onKeyDown={e=>{
            if (e.key=="Enter")
            {
              handleSearch()
            }
          }}/>
          <FaSearch style={{color:"rgb(164, 8, 123)", cursor:"pointer"}} onClick={handleSearch}/>
        </div>

        <div className={styles.login}>
          <Link className={styles.cart} to="/Cart"><FaShoppingCart style={{color:"blue"}}/>{totalQuantity>0?<small className={`stheme ${styles.cartQuantity}`}>{totalQuantity}</small>:null}</Link>
          {name?<span>Hello, {name}</span>:
          <span onClick={()=>{setModalOpen(true);setModalType("login")}} style={{cursor:"pointer"}}>
           Login|Register
         </span>
          }
         
        </div> 
        

      </div>

      <div className={styles.bottomdiv}>
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/About">About</Link>
      </div>

    </nav>
  )
}
