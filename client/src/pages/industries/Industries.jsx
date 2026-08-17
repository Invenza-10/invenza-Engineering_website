import styles from "./industries.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

import i1Soap1 from "@/assets/images/industries/i1_soap1.webp";
import i1Soap2 from "@/assets/images/industries/i1_soap2.webp";

import i2Detergent1 from "@/assets/images/industries/i2_detergent1.webp";
import i2Detergent2 from "@/assets/images/industries/i2_detergent2.webp";

import i3Spray1 from "@/assets/images/industries/i3_spray1.webp";
import i3Spray2 from "@/assets/images/industries/i3_spray2.webp";

import i4Bakery from "@/assets/images/industries/i4_bakery.webp";

import i5Labsa1 from "@/assets/images/industries/i5_labsa1.webp";
import i5Labsa2 from "@/assets/images/industries/i5_labsa2.webp";

import i6Packaging from "@/assets/images/industries/i6_packaging.webp";



const industries = [
  {
    id: 1,
    title: "Soap Production Machinery",
    desc: "We provide complete machinery and process solutions for soap manufacturing plants. Our systems cover all production stages, from mixing and refining to molding and finishing, ensuring consistent quality, operational efficiency, and scalable performance.",
    images: [i1Soap1, i1Soap2],
  },
  {
    id: 2,
    title: "Detergent Powder Production Systems",
    desc: "Our detergent plant solutions enable efficient blending, dosing, and material handling processes. Engineered for precision and reliability, these systems help manufacturers achieve uniform quality and high-volume output with optimized workflow.",
    images: [i2Detergent1, i2Detergent2],
  },
  {
    id: 3,
    title: "Spray Drying Tower Systems",
    desc: "We design and supply advanced spray drying towers for large-scale production. These systems ensure controlled processing conditions, efficient moisture management, and consistent particle quality while supporting continuous operation.",
    images: [i3Spray1, i3Spray2],
  },
  {
    id: 4,
    title: "Bakery, Biscuit & Confectionery Machinery",
    desc: "Our integrated solutions facilitate automated production of bakery and confectionery products. Each system—from mixing and forming to baking, cooling, and packaging—is designed for smooth operations, process efficiency, and consistent product standards.",
    images: [i4Bakery],
  },
  {
    id: 5,
    title: "LABSA & Sulphonation Plant Equipment",
    desc: "We deliver process-engineered machinery for LABSA and sulphonation plants. Built for precision, safety, and stable chemical processing, these systems ensure efficient output and dependable plant performance.",
    images: [i5Labsa1, i5Labsa2],
  },
  {
    id: 6,
    title: "Packaging & Automation Solutions",
    desc: "Our packaging and automation systems streamline filling, sealing, conveying, and material handling. Designed to enhance speed, accuracy, and operational consistency, they minimize manual intervention and maximize production efficiency.",
    images: [i6Packaging],
  },
];

export default function IndustriesPage() {
  return (
    <section className={styles.industry}>
      <div className={styles.industryContainer}>
        <div className={styles.text1}>
          <h2>Comprehensive Engineering Solutions</h2>

          <p className={styles.industrySubtitle}>
            Invenza Engineering LLP delivers turnkey industrial machinery and
            engineering solutions for modern manufacturing. Serving chemical,
            soap, detergent, packaging, and food industries, we help businesses
            build efficient, scalable, and high-performance production
            facilities.
          </p>
        </div>

        {/* <div className={styles.industrySections}> */}
        {industries.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.row} ${index % 2 !== 0 ? styles.reverse : ""}`}
          >
            {/* TEXT BLOCK */}
            <div className={styles.text}>
              <h3>
                <span>{item.id}.</span> {item.title}
              </h3>
              <p>{item.desc}</p>
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Know more
              </button>
            </div>

            {/* IMAGE BLOCK */}
            <div className={styles.image}>
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop
                allowTouchMove={true}
                className={styles.swiper}
              >
                {item.images.map((img, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img src={img} alt={`${item.title} ${imgIndex + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </section>
  );
}
