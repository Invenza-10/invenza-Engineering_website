import styles from "./projects.module.css";
import p1 from "@/assets/images/home/projects/turnkey1_1000.webp";
import p2 from "@/assets/images/home/projects/turnkey2_1000.webp";
import LocationIcon from "@/assets/icons/location.svg?react";
// import ArrowIcon from "@/assets/icons/arrow.svg?react";
import CarouselNav from "@/components/ui/navButton/CarouselNav";

const projects = [
  {
    location: "Tamil Nadu, India",
    title: "Turnkey Soap Manufacturing Plant - India",
    desc: "Designed and installed a fully integrated soap manufacturing facility. Equipped with modern machinery to support high-volume and efficient production.",
    img: p1,
  },
  {
    location: "Gujarat, India",
    title: "Turnkey LABSA & Sulphonation Plant - Gujarat",
    desc: "Successfully delivered a turnkey LABSA and sulphonation plant equipped with advanced processing systems for safe, efficient, and high-capacity production.",
    img: p2,
  },
];

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.projectsContainer}>
        {/* HEADER */}
        <div className={styles.projectsHeader}>
          <h2>Projects Delivered</h2>
          <p>
            Delivering high-performance industrial projects designed to enhance
            productivity and operational efficiency.
          </p>
        </div>

        {/* CARDS */}
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div className={styles.projectCard} key={index}>
              <img src={project.img} alt={project.title} />

              {/* TOP LOCATION BADGE */}
              <div className={styles.projectLocationBadge}>
                <LocationIcon />
                <span>{project.location}</span>
              </div>

              {/* BOTTOM OVERLAY */}
              <div className={styles.projectOverlay}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* NAV */}
        {/* <div className={styles.projectsNav}>
          <button className={styles.navBtn}>
            <ArrowIcon />
          </button>

          <button className={`${styles.navBtn} ${styles.right}`}>
            <ArrowIcon />
          </button>
        </div> */}

        {/* Og */}
        {/* <CarouselNav
          onPrev={() => {}}
          onNext={() => {}}
          disablePrev={false}
          disableNext={false}
        /> */}

      </div>
    </section>
  );
}
