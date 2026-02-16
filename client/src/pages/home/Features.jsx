import styles from "./Features.module.css";

const features = [
  {
    id: 1,
    title: "24/7 Customer Support",
    desc: "Round-the-clock assistance to keep your operations running smoothly.",
  },
  {
    id: 2,
    title: "Remote Technical Assistance",
    desc: "Fast online support for urgent technical requirements.",
  },
  {
    id: 3,
    title: "Skilled Service Professionals",
    desc: "Expert teams for installation, maintenance, and troubleshooting.",
  },
  {
    id: 4,
    title: "Engineering & Layout Expertise",
    desc: "Optimized plant layout and machinery planning support.",
  },
  {
    id: 5,
    title: "Process Knowledge & Technical Insight",
    desc: "Industry expertise to enhance processing and packaging efficiency.",
  },
  {
    id: 6,
    title: "Trusted by Our Clients",
    desc: "Long-term partnerships built on performance and reliability.",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresContainer}>
        {/* LEFT */}
        <div className={styles.featuresLeft}>
          <h2>What makes us special!</h2>
          <p>
            We deliver fully integrated industrial solutions backed by strong
            technical expertise and reliable project support. Our team ensures
            efficient performance and long-term operational reliability,
            building lasting partnerships beyond project completion.
          </p>

          <button className={styles.featuresBtn}>Take the First Step</button>
        </div>

        {/* RIGHT */}
        <div className={styles.featuresRight}>
          {features.map((item) => (
            <div className={styles.featureItem} key={item.id}>
              <div className={styles.featureNumber}>{item.id}</div>
              <div className={styles.featureContent}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
