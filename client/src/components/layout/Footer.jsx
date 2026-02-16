import styles from "./Footer.module.css";
import Logo from "@/assets/logo/logo.svg?react";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={`${styles.footerCol} ${styles.desc}`}>
          <a href="/" aria-label="Go to homepage">
            <Logo className={styles.logoImg} />
          </a>
          <p>
            Invenza Engineering is a trusted provider of turnkey industrial
            machinery and engineering solutions. We deliver high-quality
            equipment for chemical, soap, detergent, packaging, and food
            industries, helping businesses achieve efficient, reliable, and
            scalable manufacturing.
          </p>

          <div>
            <h3>Connect with us</h3>

            <div className={styles.socials}>
              <a
                href="https://in.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaLinkedinIn />
                </span>
              </a>

              <a
                href="https://wa.me/919311892538"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaWhatsapp />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.footerCol} ${styles.company}`}>
          <h3>COMPANY</h3>
          <ul>
            <li>
              <Link to="/" onClick={() => handleNavClick("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/industries"
                onClick={() => handleNavClick("/industries")}
              >
                Industries
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => handleNavClick("/services")}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => handleNavClick("/contact")}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className={`${styles.footerCol} ${styles.address}`}>
          <div>
            <h3>Address</h3>
            <p>
              NO 25, 2nd Floor, 1st Cross, Suprabhathanagar, Banglore, North
              Karnataka, India - 560073
            </p>
          </div>

          <div>
            <h3>Contact</h3>
            <p>sales@invenzaengineering.com</p>
            <p>+91 9311892538</p>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        © Copyright 2024, All Rights Reserved by Invenza Engineering
      </div>
    </footer>
  );
}

export default Footer;
