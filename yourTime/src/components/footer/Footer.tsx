import "./Footer.css";
import { Link } from "react-router-dom";
 const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
export default function footer ()  {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:krstevskidavid998@gmail.com">
                krstevskidavid998@gmail.com
              </a>
            </li>
            <li>
              Phone: <a href="tel:+38975667340">+389 75 667 340</a>
            </li>
            <li>Skopje, Macedonia</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/About_this_page" onClick={scrollToTop}>About this page</Link>
            </li>
            <li>
              <Link to="/Contact" onClick={scrollToTop}>Contact</Link>
            </li>
            <li>
              <Link to="/festina" onClick={scrollToTop}>Festina</Link>
            </li>
            <li>
              <Link to="/seiko" onClick={scrollToTop}>Seiko</Link>
            </li>
            <li>
              <Link to="swiss-military" onClick={scrollToTop}>Swiss Military</Link>
            </li>
          </ul>
        </div>

        <div className="footer-message">
          <p>Crafted with passion for technology, design, and programming.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} David Krstevski. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

