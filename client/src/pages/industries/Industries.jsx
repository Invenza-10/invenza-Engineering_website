import styles from "./industries.module.css";
import p1 from "@/assets/images/factory.png";
import i1Soap from "@/assets/images/i1_soap.png";
import i2Detergent from "@/assets/images/i2_detergent.png";
import i3Spray from "@/assets/images/i3_spray.png";
import i4Bakery from "@/assets/images/i4_bakery.png";
import i5Labsa from "@/assets/images/i5_labsa.png";
import i6Packaging from "@/assets/images/i6_packaging.png";

const industries = [
  {
    id: 1,
    title: "Soap Production Machinery",
    desc: "We provide complete machinery and process solutions for soap manufacturing plants. Our systems cover all production stages, from mixing and refining to molding and finishing, ensuring consistent quality, operational efficiency, and scalable performance.",
    img: i1Soap,
  },
  {
    id: 2,
    title: "Detergent Powder Production Systems",
    desc: "Our detergent plant solutions enable efficient blending, dosing, and material handling processes. Engineered for precision and reliability, these systems help manufacturers achieve uniform quality and high-volume output with optimized workflow.",
    img: i2Detergent,
  },
  {
    id: 3,
    title: "Spray Drying Tower Systems",
    desc: "We design and supply advanced spray drying towers for large-scale production. These systems ensure controlled processing conditions, efficient moisture management, and consistent particle quality while supporting continuous operation.",
    img: i3Spray,
  },
  {
    id: 4,
    title: "Bakery, Biscuit & Confectionery Machinery",
    desc: "Our integrated solutions facilitate automated production of bakery and confectionery products. Each system—from mixing and forming to baking, cooling, and packaging—is designed for smooth operations, process efficiency, and consistent product standards.",
    img: i4Bakery,
  },
  {
    id: 5,
    title: "LABSA & Sulphonation Plant Equipment",
    desc: "We deliver process-engineered machinery for LABSA and sulphonation plants. Built for precision, safety, and stable chemical processing, these systems ensure efficient output and dependable plant performance.",
    img: i5Labsa,
  },
  {
    id: 6,
    title: "Packaging & Automation Solutions",
    desc: "Our packaging and automation systems streamline filling, sealing, conveying, and material handling. Designed to enhance speed, accuracy, and operational consistency, they minimize manual intervention and maximize production efficiency.",
    img: i6Packaging,
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
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </section>
  );
}
