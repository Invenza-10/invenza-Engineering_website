import styles from "./Contact.module.css";
import { useState } from "react";
import ArrowIcon from "@/assets/icons/arrow.svg?react";

function Contact({ title }) {
  const countries = [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    "Service 5",
  ];

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = (data) => {
    const newErrors = {};

    // Name
    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(data.name)) {
      newErrors.name = "Only letters allowed";
    }

    // Email
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Invalid email address";
    }

    // Service Type
    if (!data.serviceType) {
      newErrors.serviceType = "Please select a service";
    }

    // Serial Number
    if (!data.serialNumber.trim()) {
      newErrors.serialNumber = "Serial number is required";
    }

    // Phone (optional but validated if filled)
    if (data.phone && !/^[0-9+\-\s()]{7,20}$/.test(data.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // Description
    if (!data.description.trim()) {
      newErrors.description = "Description is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "loading") return;

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const validationErrors = validate(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    data.formType = "service";

    try {
      await fetch(
        import.meta.env.VITE_GOOGLE_SCRIPT_URL,
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(data),
        },
      );

      setStatus("success");
      e.target.reset();

      setTimeout(() => setStatus(""), 4000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <section id="contact" className={styles.contact} style={{background: "#ffffff" }}>
      <div className={styles.contactContainer}>
        {/* Left content */}
        <div className={styles.contactInfo}>
          <h1>{ title }</h1>
        </div>

        {/* Form */}
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formInputs}>
            {/* Name */}
            <div>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className={errors.name ? styles.inputError : ""}
              />
              {errors.name && (
                <span className={styles.fieldError}>{errors.name}</span>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className={errors.email ? styles.inputError : ""}
              />
              {errors.email && (
                <span className={styles.fieldError}>{errors.email}</span>
              )}
            </div>

            {/* Service Type */}
            <div>
              <select
                name="serviceType"
                defaultValue=""
                className={errors.serviceType ? styles.inputError : ""}
              >
                <option value="" disabled>
                  Select service type
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.serviceType && (
                <span className={styles.fieldError}>{errors.serviceType}</span>
              )}
            </div>

            {/* Serial Number */}
            <div>
              <input
                name="serialNumber"
                type="text"
                placeholder="Machine Serial / PI Number"
                className={errors.serialNumber ? styles.inputError : ""}
              />
              {errors.serialNumber && (
                <span className={styles.fieldError}>{errors.serialNumber}</span>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                name="phone"
                type="text"
                placeholder="Phone"
                className={errors.phone ? styles.inputError : ""}
              />
              {errors.phone && (
                <span className={styles.fieldError}>{errors.phone}</span>
              )}
            </div>

            {/* Company */}
            <div>
              <input name="company" type="text" placeholder="Company" />
            </div>

            {/* Description Full Width */}
            <div style={{ gridColumn: "1 / -1" }}>
              <textarea
                name="description"
                placeholder="Description"
                className={errors.description ? styles.inputError : ""}
              />
              {errors.description && (
                <span className={styles.fieldError}>{errors.description}</span>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`
    ${styles.submitButton}
    ${status === "success" ? styles.success : ""}
    ${status === "error" ? styles.error : ""}
  `}
          >
            {status === "loading"
              ? "Submitting..."
              : status === "success"
                ? "Submitted ✓"
                : status === "error"
                  ? "Failed ✕"
                  : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
