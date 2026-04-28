import { NavLink, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import styles from './Navbar.module.css';
import { useSelector } from 'react-redux'
import { useContext } from 'react';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { ModalContext } from '../Context/ModalContext';


export const Navbar = ({ input, setInput, name, theme, setTheme }) => {
  const navigate = useNavigate()
  const {setModalOpen}=useContext(ModalContext)
  const { totalQuantity } = useSelector(state => state.cart) 

  const toggleTheme=()=>{
    theme==='dark'?setTheme('light'):setTheme('dark')
  }

  const handleSearch = () => {
    navigate("/Shop")
  }

  return (
    <nav>
      <div className={styles.topdiv}>
        <img loading='lazy' src="/logo.png" alt="" />
        <div className={styles.inputdiv}>
          <input value={input} type="text" placeholder='Search' onChange={e => setInput(e.target.value)} onKeyDown={e => {
            if (e.key == "Enter") {
              handleSearch()
            }
          }} />
          <FaSearch style={{ color: "rgb(164, 8, 123)", cursor: "pointer" }} onClick={handleSearch} />
        </div>

        <div className={styles.login}>
          <span onClick={toggleTheme} style={{cursor:'pointer'}}>{theme==='light'?<MdDarkMode size={18}/>:<MdLightMode size={18}/>}</span>
          <NavLink to="/wishList"><FaHeart style={{color:"red"}}/></NavLink>
          <NavLink className={styles.cart} to="/Cart"><FaShoppingCart style={{ color: "blue" }} />{totalQuantity > 0 ? <small className={`stheme ${styles.cartQuantity}`}>{totalQuantity}</small> : null}</NavLink>
          {name ? <span>Hello, {name}</span> :
            <span onClick={() => { setModalOpen('login') }} style={{ cursor: "pointer" }}>
              Login|Register
            </span>
          }
        </div>
      </div>

      <div className={styles.bottomdiv}>
        <NavLink
          to="/"
          style={({ isActive }) => isActive ? { color: "var(--accent-color)", fontWeight: "bold" } : undefined}
        >
          Home
        </NavLink>

        <NavLink
          to="/Shop"
          style={({ isActive }) => isActive ? { color: "var(--accent-color)", fontWeight: "bold" } : undefined}
        >
          Shop
        </NavLink>

        <NavLink
          to="/About"
          style={({ isActive }) => isActive ? { color: "var(--accent-color)", fontWeight: "bold" } : undefined}
        >
          About
        </NavLink>
      </div>
    </nav>
  )
}
