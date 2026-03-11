import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import styles from './Navbar.module.css';
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';

export const Navbar = ({ input, setInput, setModalOpen, setModalType, name }) => {
  const [tabIndex, setTabIndex] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  const { totalQuantity } = useSelector(state => state.cart)

  useEffect(() => {
    if (location.pathname === "/") setTabIndex(0)
    else if (location.pathname === "/Shop") setTabIndex(1)
    else if (location.pathname === "/About") setTabIndex(2)
    else setTabIndex()
  }, [location.pathname])

  const handleSearch = () => {
    navigate("/Shop")
  }

  return (
    <nav>
      <div className={styles.topdiv}>
        <img src="/logo.png" alt="" />
        <div className={styles.inputdiv}>
          <input value={input} type="text" placeholder='Search' onChange={e => setInput(e.target.value)} onKeyDown={e => {
            if (e.key == "Enter") {
              handleSearch()
            }
          }} />
          <FaSearch style={{ color: "rgb(164, 8, 123)", cursor: "pointer" }} onClick={handleSearch} />
        </div>

        <div className={styles.login}>
          <Link to="/wishList"><FaHeart style={{color:"red"}}/></Link>
          <Link className={styles.cart} to="/Cart"><FaShoppingCart style={{ color: "blue" }} />{totalQuantity > 0 ? <small className={`stheme ${styles.cartQuantity}`}>{totalQuantity}</small> : null}</Link>
          {name ? <span>Hello, {name}</span> :
            <span onClick={() => { setModalOpen(true); setModalType("login") }} style={{ cursor: "pointer" }}>
              Login|Register
            </span>
          }
        </div>
      </div>

      <div className={styles.bottomdiv}>
        <Link
          to="/"
          style={tabIndex === 0 ? { color: "red", fontWeight: "bold" } : null}
        >
          Home
        </Link>

        <Link
          to="/Shop"
          style={tabIndex === 1 ? { color: "red", fontWeight: "bold" } : null}
        >
          Shop
        </Link>

        <Link
          to="/About"
          style={tabIndex === 2 ? { color: "red", fontWeight: "bold" } : null}
        >
          About
        </Link>
      </div>
    </nav>
  )
}
