import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useSelector } from "react-redux";
import { useContext } from "react";

import styles from "./Header.module.css";
import { ModalContext } from "../Context/ModalContext";

export const Header = ({ input, setInput, name, theme, setTheme }) => {
  const navigate = useNavigate();
  const { setModalOpen } = useContext(ModalContext);
  const { totalQuantity } = useSelector((state) => state.cart);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSearch = () => {
    navigate("/shop");
  };

  return (
    <header>
      <div className={styles.topdiv}>
        <NavLink to="/">
          <img src="/logo.png" alt="Eshop" />
        </NavLink>

        <div className={styles.inputdiv}>
          <input
            value={input}
            type="text"
            placeholder="Search"
            aria-label="Search products"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button
            type="button"
            onClick={handleSearch}
            aria-label="Search"
            style={{
              display: "flex",
              alignItems: "center",
              background: "transparent",
            }}
          >
            <FaSearch
              style={{ color: "rgb(164, 8, 123)" }}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className={styles.sideLinks}>
          <button
            type="button"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            onClick={toggleTheme}
            style={{ cursor: "pointer" }}
          >
            {theme === "light" ? (
              <MdDarkMode size={18} aria-hidden="true" />
            ) : (
              <MdLightMode size={18} aria-hidden="true" />
            )}
          </button>

          <NavLink to="/wishList" aria-label="Wishlist">
            <FaHeart style={{ color: "red" }} aria-hidden="true" />
          </NavLink>

          <NavLink
            className={styles.cart}
            to="/cart"
            aria-label={`Cart (${totalQuantity} items)`}
          >
            <FaShoppingCart style={{ color: "blue" }} aria-hidden="true" />

            {totalQuantity > 0 && (
              <small className={`accent ${styles.cartQuantity}`}>
                {totalQuantity}
              </small>
            )}
          </NavLink>

          {name ? (
            <span>Hello, {name}</span>
          ) : (
            <button
              type="button"
              onClick={() => setModalOpen("login")}
              style={{ cursor: "pointer" }}
            >
              Login | Register
            </button>
          )}
        </div>
      </div>

      <nav aria-label="Primary navigation">
        <div className={styles.bottomdiv}>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "var(--accent-color)",
                    fontWeight: "bold",
                  }
                : undefined
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "var(--accent-color)",
                    fontWeight: "bold",
                  }
                : undefined
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "var(--accent-color)",
                    fontWeight: "bold",
                  }
                : undefined
            }
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
