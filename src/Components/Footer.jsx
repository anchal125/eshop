import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "./Footer.module.css";

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
          <nav aria-label="Footer navigation">
            <ul className={styles.links}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="social">
          <h4>Follow us</h4>
          <nav aria-label="Social media links">
            <ul className={styles.icons}>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigate to Facebook"
                >
                  <FaFacebookF aria-hidden="true" size={24} color="#4267B2" />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigate to Twitter"
                >
                  <FaTwitter aria-hidden="true" size={24} color="#1DA1F2" />
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigate to Instagram"
                >
                  <FaInstagram aria-hidden="true" size={24} color="#E1306C" />
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigate to LinkedIn"
                >
                  <FaLinkedinIn aria-hidden="true" size={24} color="#0077B5" />
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.inputdiv}>
            <input
              type="email"
              placeholder="Your email"
              aria-label="Enter your email address"
            />
            <button className="accent">Subscribe</button>
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
  );
};
