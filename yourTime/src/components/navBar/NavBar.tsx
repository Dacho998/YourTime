import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import "./NavBar.css";
import logo from "../../assets/assetsHomepage/Logo.png";

export default function Header()  {
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const toggleBrands = () => setBrandsOpen((prev) => !prev);
  const closeBrands = () => setBrandsOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    clearCart();
    logout();
    navigate("/log_in");
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeBrands();
      }
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header-container">
      <div className="header-top">
        <span className="logo">
          <img src={logo} alt="logo img" className="logo-img" />
        </span>
        <h1 className="title">YOUR:TIME</h1>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav ref={navRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
        <div className="nav-container">
          <div className="drop" ref={dropdownRef}>
            <button
              className="navbutton"
              aria-haspopup="true"
              aria-expanded={brandsOpen}
              onClick={toggleBrands}
            >
              BRANDS
            </button>
            {brandsOpen && (
              <div className="brand">
                <ul>
                  <li>
                    <Link
                      to="/festina"
                      onClick={() => {
                        closeBrands();
                        closeMenu();
                      }}
                    >
                      FESTINA
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/seiko"
                      onClick={() => {
                        closeBrands();
                        closeMenu();
                      }}
                    >
                      SEIKO
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/swiss"
                      onClick={() => {
                        closeBrands();
                        closeMenu();
                      }}
                    >
                      SWISS MILITARY
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <ul className="navbuttons">
            <li>
              <Link to="/" onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/About_this_page" onClick={closeMenu}>
                ABOUT THIS PAGE
              </Link>
            </li>
            <li>
              <Link to="/Contact" onClick={closeMenu}>
                CONTACT
              </Link>
            </li>

            {user && (
              <li>
                <Link to="/cart" className="cart-link" onClick={closeMenu}>
                  CART
                  {cart.length > 0 && (
                    <span className="cart-badge">{cart.length}</span>
                  )}
                </Link>
              </li>
            )}

            <li>
              {user ? (
                <button onClick={handleLogout} className="logout-button">
                  LOG OUT
                </button>
              ) : (
                <Link to="/log_in" onClick={closeMenu}>
                  LOG IN
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
