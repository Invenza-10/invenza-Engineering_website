import styles from "./Contact.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { submitToGoogleSheet } from "@/lib/googleSheets";

function Contact({ title }) {
  const services = [
    "Soap Production Machinery",
    "Detergent Powder Production Systems",
    "Spray Drying Tower Systems",
    "Bakery, Biscuit & Confectionery Machinery",
    "LABSA & Sulphonation Plant Equipment",
    "Packaging & Automation Solutions",
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
    if (
      data.phone &&
      !/^[0-9+\-\s()]{7,20}$/.test(data.phone)
    ) {
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

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const validationErrors = validate(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      await Promise.all([
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name: data.name,
            email: data.email,
            serviceType: data.serviceType,
            serialNumber: data.serialNumber,
            phone: data.phone,
            company: data.company,
            description: data.description,
            formType: "service",
          },
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        ),
        submitToGoogleSheet("service", data),
      ]);

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Service enquiry submission failed:", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <section
      id="contact"
      className={styles.contact}
      style={{ background: "#ffffff" }}
    >
      <div className={styles.contactContainer}>
        {/* Left content */}
        <div className={styles.contactInfo}>
          <h1>{title}</h1>
        </div>

        {/* Form */}
        <form
          className={styles.contactForm}
          onSubmit={handleSubmit}
          noValidate
        >
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
                <span className={styles.fieldError}>
                  {errors.name}
                </span>
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
                <span className={styles.fieldError}>
                  {errors.email}
                </span>
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

                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              {errors.serviceType && (
                <span className={styles.fieldError}>
                  {errors.serviceType}
                </span>
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
                <span className={styles.fieldError}>
                  {errors.serialNumber}
                </span>
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
                <span className={styles.fieldError}>
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Company */}
            <div>
              <input
                name="company"
                type="text"
                placeholder="Company"
              />
            </div>

            {/* Description */}
            <div style={{ gridColumn: "1 / -1" }}>
              <textarea
                name="description"
                placeholder="Description"
                className={
                  errors.description ? styles.inputError : ""
                }
              />
              {errors.description && (
                <span className={styles.fieldError}>
                  {errors.description}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
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
