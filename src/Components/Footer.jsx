import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topdiv}>
        <div className={styles.eshop}>
          <h3>e-Shop</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.quicklinks}>
          <h4>Quick Links</h4>
          <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/Shop">Shop</Link>
            <Link to="/About">About</Link>
          </div>
          
        </div>
        <div className="social">
          <h4>Follow us</h4>
          <div className={styles.icons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={24} color="#4267B2" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} color="#1DA1F2" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color="#E1306C" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={24} color="#0077B5" />
            </a>
          </div>
          <div className={styles.inputdiv}>
            <input type="text" placeholder='Your email' />
            <button className="stheme">Search</button>
          </div>

        </div>
      </div>
      <div className={styles.bottomdiv}>
        <small>&copy; 2024 e-Shop. All rights reserved.</small>
        <div className={styles.options}>
          <small>Privacy Policy</small>
          <small>Terms of Service</small>
        </div>
      </div>
    </footer>
  )
}
