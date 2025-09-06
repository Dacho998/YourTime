import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import avatar from "../../assets/assetsHomepage/avatar.jpg";
import { useNavBarLogic } from "./hooks/UseNavBarLogic";
import BrandDropdown from "./components/BrandsDropdown";
import UserInfo from "./components/UserInfo";
import Hamburger from "./components/Hamburger";
import "./css/NavBar.css";
import "./css/NavBarResponsive.css"

export default function NavBar() {
  const { user, logout } = useAuth();
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const {
    brandsOpen,
    menuOpen,
    toggleBrands,
    closeBrands,
    toggleMenu,
    closeMenu,
    dropdownRef,
    navRef,
  } = useNavBarLogic();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleLogout = () => {
    clearCart();
    logout();
    navigate("/log_in");
    closeMenu();
  };

  return (
    <header className="header-container">
      <div className="header-top">
        <h1 className="title">
          <span className="brand-word">YOUR:TIME</span>
        </h1>

        {user && <UserInfo name={user.name} avatar={avatar} />}

        <Hamburger isOpen={menuOpen} onClick={toggleMenu} />
      </div>

      <nav ref={navRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
        <div className="nav-container">
          <ul className="navbuttons">
            {user && <UserInfo name={user.name} avatar={avatar} isMobile />}

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

              <BrandDropdown
                isOpen={brandsOpen}
                onClose={closeBrands}
                onItemClick={() => {
                  scrollToTop();
                  closeMenu();
                }}
              />
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
                  scrollToTop();
                  closeBrands();
                  closeMenu();
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
                  WATCH BOX{" "}
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
