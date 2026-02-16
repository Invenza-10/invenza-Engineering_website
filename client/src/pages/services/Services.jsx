import styles from "./Services.module.css";
import s0 from "@/assets/images/s0.jpg";
import ServicesCarousel from "./ServicesCarousel";

import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          {/* Left content */}
          <div className={styles.heroText}>
            <h1>Customer satisfaction is our core commitment</h1>
            <p>
              We deliver end-to-end industrial engineering services for process
              plants and manufacturing facilities. From concept and design to
              machinery supply, installation, automation, and commissioning, our
              solutions are built for efficiency, reliability, and long-term
              performance. Partner with us to elevate your production
              capabilities with expert engineering and seamless project
              execution.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>
                  Successful Installation
                </span>
              </div>

              <div className={styles.divider} />

              <div className={styles.statItem}>
                <span className={styles.statNumber}>30+</span>
                <span className={styles.statLabel}>Customers Served</span>
              </div>
            </div>

            <button
              className={styles.ctaButton}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>

          {/* Right image */}
          <div className={styles.heroImages}>
            <img src={s0} alt="Machine" />
          </div>
        </div>
      </section>

      <ServicesCarousel />
    </>
  );
}
