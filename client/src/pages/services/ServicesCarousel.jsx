import { useState, useEffect } from "react";
import styles from "./ServicesCarousel.module.css";
import s1 from "@/assets/images/s1_specialized.jpg";
import s2 from "@/assets/images/s2_dedicated.jpg";
import s3 from "@/assets/images/s3_regular.jpg";
import s4 from "@/assets/images/s4_on_demand.jpg";
import CarouselNav from "@/components/ui/navButton/CarouselNav";

const services = [
  {
    title: "Specialized After Sales Services",
    desc: "Invenza provides after-sales services including technical assistance, maintenance and ensure customer satisfaction.",
    img: s1,
  },
  {
    title: "Dedicated Support System",
    desc: "To help customers with product or service questions, Invenza offers a dedicated support system of specialists.",
    img: s2,
  },
  {
    title: "Regular Visits",
    desc: "Invenza prioritizes repeat customers for satisfaction based on stability issues, tracking progress.",
    img: s3,
  },
  {
    title: "On Demand Solutions",
    desc: "Invenza prioritizes repeat customers for checking and satisfaction based on stability issues, performance, and tracking progress.",
    img: s4,
  },
];

const ServicesCarousel = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(2);
      }
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const next = () => {
    if (index < services.length - visibleCards) setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Services We Provide</h1>
      <div className={styles.carousel}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${(100 / visibleCards) * index}%)` }}
        >
          {services.map((service, i) => (
            <div key={i} className={styles.card}>
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <CarouselNav
          onPrev={prev}
          onNext={next}
          disablePrev={index === 0}
          disableNext={index >= services.length - visibleCards}
          className={styles.carouselNav}
        />
      </div>
    </section>
  );
};

export default ServicesCarousel;
