import styles from "./IndustriesHome.module.css";
import SoapIcon from "@/assets/icons/soap.svg?react";
import DetergentIcon from "@/assets/icons/detergent.svg?react";
import SprayIcon from "@/assets/icons/spray.svg?react";
import BakeryIcon from "@/assets/icons/bakery.svg?react";
import LabsaIcon from "@/assets/icons/labsa.svg?react";
import PackagingIcon from "@/assets/icons/packaging.svg?react";

//
// const cards = Array.from({ length: 11 });

const industriesData = [
  {
    title: "Soap Manufacturing",
    desc: "Complete plant engineering for bar and laundry soap production, including mixing, refining, plodding, stamping, and finishing systems.",
    icon: <SoapIcon />,
  },
  {
    title: "Detergent Powder Manufacturing",
    desc: "Advanced production lines for detergent powder processing, blending, dosing, and packaging.",
    icon: <DetergentIcon />,
  },
  {
    title: "Spray Drying Towers",
    desc: "High-capacity spray drying solutions for large-scale detergent manufacturing with optimized process efficiency.",
    icon: <SprayIcon />,
  },
  {
    title: "Bakery & Biscuits Production Lines",
    desc: "Integrated bakery systems covering mixing, forming, baking, cooling, and packaging operations.",
    icon: <BakeryIcon />,
  },
  {
    title: "LABSA & Sulphonation Plants",
    desc: "Process-engineered systems for LABSA production and sulphonation, designed for safe and controlled chemical processing.",
    icon: <LabsaIcon />,
  },
  {
    title: "Packaging & Automation Systems",
    desc: "Automated filling, sealing, conveying, and packaging solutions to improve speed, accuracy, and production consistency.",
    icon: <PackagingIcon />,
  },
];

function Industries() {
  return (
    <section className={styles.industries}>
      <div className={styles.industriesContainer}>
        <h2>Industries We Serve</h2>

        <p className={styles.industriesSubtitle}>
          Comprehensive process plant engineering and industrial machinery
          solutions built to support efficient, scalable, and reliable
          manufacturing operation
        </p>

        <div className={styles.industriesWrapper}>
          {/* Top grid (3 cards) */}
          <div className={styles.industriesGrid}>
            {industriesData.slice(0, 6).map((item, index) => (
              <div key={index} className={styles.industryCard}>
                <div className={styles.cardHeader}>
                  <h3>{item.title}</h3>
                  <div className={styles.icon}>{item.icon}</div>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom grid (2 cards) */}
          {/* <div className="industries-grid two-grid">
            {industriesData.slice(3, 5).map((item, index) => (
              <div key={index} className="industry-card">
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Industries;
