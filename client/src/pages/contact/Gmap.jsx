import styles from "./Gmap.module.css";

export default function Gmap() {
  return (
    <section className={styles.reachSection}>
      <h2 className={styles.heading}>REACH US</h2>

      <div className={styles.mapContainer}>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.178495830842!2d75.78727031504652!3d26.912433983126166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3a5c3e1e1f1%3A0xabcdef1234567890!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
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
