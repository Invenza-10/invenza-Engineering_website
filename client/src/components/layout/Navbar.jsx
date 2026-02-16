import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import Logo from "@/assets/logo/logo.svg?react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={styles.navbar}>
      {/* ---------------- TOP SECTION ---------------- */}
      <div className={styles.topBarContainer}>
        <div className={styles.topBar}>
          <NavLink to="/" aria-label="Go to homepage">
            <Logo className={styles.logoImg} />
          </NavLink>

          <div className={styles.contactInfo}>
            <div>
              <p className={styles.contactLabel}>Call us</p>
              <p className={styles.contactValue}>+91 9311892538</p>
            </div>

            <div className={styles.divider}></div>

            <div>
              <p className={styles.contactLabel}>Email us</p>
              <p className={styles.contactValue}>
                sales@invenzaengineering.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- BOTTOM NAVIGATION ---------------- */}
      <div className={styles.bottomNavContainer}>
        <nav className={styles.bottomNav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/industries"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Industries
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact us
          </NavLink>

          {/* Mobile Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/industries"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            Industries
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </NavLink>
        </div>
      )}
    </header>
  );
}
