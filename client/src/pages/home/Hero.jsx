import styles from "./Hero.module.css";
import p1 from "@/assets/images/home/factory.webp";
// import p2 from "@/assets/images/p2.png";
// import p3 from "@/assets/images/p3.png";
// import p4 from "@/assets/images/p4.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>

        {/* Left content */}
        <div className={styles.heroText}>
          <h1>End-to-End Industrial Machinery Solutions</h1>
          <p>
            We deliver turnkey factory solutions, industrial machinery, and automation systems for soap, detergent, chemical, bakery, and FMCG production — enabling efficient, reliable, and large-scale manufacturing.          
          </p>
          <button onClick={() => navigate("/contact")} >Contact us</button>
        </div>

        {/* Right images */}
        <div className={styles.heroImages}>
          <img src={p1} alt="machine" />
          {/* <img src={p2} alt="factory" />
          <img src={p3} alt="engine" />
          <img src={p4} alt="automation" /> */}
        </div>

      </div>
    </section>
  );
}

export default Hero;
