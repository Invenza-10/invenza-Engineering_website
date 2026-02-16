import styles from "./CarouselNav.module.css";
import ArrowIcon from "@/assets/icons/arrow.svg?react";

const CarouselNav = ({ onPrev, onNext, disablePrev, disableNext }) => {
  return (
    <div className={styles.projectsNav}>
      <button
        className={styles.navBtn}
        onClick={onPrev}
        disabled={disablePrev}
      >
        <ArrowIcon />
      </button>

      <button
        className={`${styles.navBtn} ${styles.right}`}
        onClick={onNext}
        disabled={disableNext}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default CarouselNav;
