import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import "./NavBar.css";

export default function Header() {
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
      )
        closeBrands();
      if (navRef.current && !navRef.current.contains(event.target as Node))
        closeMenu();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header-container">
      <div className="header-top">
        <h1 className="title">
          <span className="brand-word">YOUR:TIME</span>
        </h1>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav ref={navRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
        <div className="nav-container">
          <ul className="navbuttons">
            <li
              ref={dropdownRef}
              className={`brands-wrapper ${brandsOpen ? "active" : ""}`}
            >
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
                  {["FESTINA", "SEIKO", "SWISS-MILITARY"].map((brand) => (
                    <li key={brand}>
                      <Link
                        className="nav-item"
                        to={`/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => {
                          scrollToTop();
                          closeBrands();
                          closeMenu();
                        }}
                      >
                        {brand}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                className="nav-item"
                to="/"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                to="/About_this_page"
                onClick={() => {
                  closeMenu;
                  scrollToTop();
                }}
              >
                ABOUT THIS PAGE
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                to="/Contact"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                CONTACT
              </Link>
            </li>

            {user && (
              <li>
                <Link
                  className="nav-item cart-link"
                  to="/cart"
                  onClick={() => {
                    closeMenu();
                    scrollToTop();
                  }}
                >
                  CART{" "}
                  {cart.length > 0 && (
                    <span className="cart-badge">{cart.length}</span>
                  )}
                </Link>
              </li>
            )}

            <li>
              {user ? (
                <button
                  className="nav-item logout-button"
                  onClick={handleLogout}
                >
                  LOG OUT
                </button>
              ) : (
                <Link
                  className="nav-item"
                  to="/log_in"
                  onClick={() => {
                    closeMenu();
                    scrollToTop();
                  }}
                >
                  LOG IN
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
