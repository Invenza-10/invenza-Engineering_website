import styles from "./Gmap.module.css";

export default function Gmap() {
  return (
    <section className={styles.reachSection}>
      <h2 className={styles.heading}>REACH US</h2>

      <div className={styles.mapContainer}>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps?q=NO+25,+2nd+Floor,+1st+Cross,+Suprabhathanagar,+Bengaluru,+Karnataka+560073,+India&output=embed"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
