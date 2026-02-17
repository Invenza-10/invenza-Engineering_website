import styles from "./reachus.module.css";

import LocationIcon from "@/assets/icons/location.svg?react";
import InternetIcon from "@/assets/icons/ReachUs/internet.svg?react";
import PhoneIcon from "@/assets/icons/ReachUs/phone.svg?react";
import EmailIcon from "@/assets/icons/ReachUs/mail.svg?react";

export default function ReachUs() {
  const contactData = [
    {
      label: "Address",
      Icon: LocationIcon,
      value:
        "NO 25, 2nd Floor, 1st Cross, Suprabhathanagar, Bengaluru, North Karnataka, India - 560073",
    },
    {
      label: "Phone",
      Icon: PhoneIcon,
      values: [
        { display: "+91 9311800008", link: "tel:+919311800008" },
        { display: "+91 9876543210", link: "tel:+919876543210" },
      ],
    },
    {
      label: "Email",
      Icon: EmailIcon,
      value: "sales@invenzaengineering.com",
      link: "mailto:sales@invenzaengineering.com",
    },
    {
      label: "Website",
      Icon: InternetIcon,
      value: "www.InvenzaEngineering.com",
      link: "https://www.invenzaengineering.com",
    },
  ];

  return (
    <section className={styles.reach}>
      <div className={styles.reachContainer}>
        <h2>REACH US</h2>

        <div className={styles.container}>
          {contactData.map((item, index) => (
            <ContactCard
              key={index}
              label={item.label}
              Icon={item.Icon}
              value={item.values || item.value}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Reusable UI Component ================= */

function ContactCard({ label, Icon, value, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.label}>{label}</div>
        <div className={styles.icon}>
          <Icon />
        </div>
      </div>

      <div className={styles.value}>
        {Array.isArray(value) ? (
          value.map((item, index) => (
            <span key={index}>
              <a href={item.link}>{item.display}</a>
              {index < value.length - 1 && " | "}
            </span>
          ))
        ) : link ? (
          <a
            href={link}
            target={link.startsWith("http") ? "_blank" : undefined}
            rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {value}
          </a>
        ) : (
          value
        )}
      </div>
    </div>
  );
}
