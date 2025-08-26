import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import "./NavBar.css";
import logo from "../../assets/assetsHomepage/Logo.png";

export default function Header() {
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const toggleBrands = () => setBrandsOpen(prev => !prev);
  const closeBrands = () => setBrandsOpen(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    clearCart();
    logout();
    navigate("/log_in");
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeBrands();
      }
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
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
          <img src={logo} alt="logo" className="logo-img" />
        </span>
        <h1 className="title">YOUR:TIME</h1>

        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav ref={navRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
        <div className="nav-container">
          <ul className="navbuttons">
            <li ref={dropdownRef} className={`brands-wrapper ${brandsOpen ? "active" : ""}`}>
              <button
                className="nav-item drop"
                aria-haspopup="true"
                aria-expanded={brandsOpen}
                onClick={toggleBrands}
              >
                BRANDS
              </button>

              {brandsOpen && (
                <ul className="brand">
                  {["FESTINA", "SEIKO", "SWISS MILITARY"].map((brand) => (
                    <li key={brand}>
                      <Link
                        className="nav-item"
                        to={`/${brand.toLowerCase()}`}
                        onClick={() => { closeBrands(); closeMenu(); }}
                      >
                        {brand}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link className="nav-item" to="/" onClick={closeMenu}>HOME</Link></li>
            <li><Link className="nav-item" to="/About_this_page" onClick={closeMenu}>ABOUT THIS PAGE</Link></li>
            <li><Link className="nav-item" to="/Contact" onClick={closeMenu}>CONTACT</Link></li>

            {user && (
              <li>
                <Link className="nav-item cart-link" to="/cart" onClick={closeMenu}>
                  CART {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
                </Link>
              </li>
            )}

            <li>
              {user ? (
                <button className="nav-item logout-button" onClick={handleLogout}>LOG OUT</button>
              ) : (
                <Link className="nav-item" to="/log_in" onClick={closeMenu}>LOG IN</Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
