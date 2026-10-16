
import styles from "./Contact.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { submitToGoogleSheet } from "@/lib/googleSheets";
import ArrowIcon from "@/assets/icons/arrow.svg?react";

function Contact() {
  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "UAE",
    "Saudi Arabia",
    "Singapore",
    "Malaysia",
    "Indonesia",
    "South Africa",
    "Nigeria",
    "Brazil",
    "Mexico",
    "Japan",
    "South Korea",
    "China",
    "Other",
  ];

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};

    // First Name
    if (!data.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z\s]+$/.test(data.firstName)) {
      newErrors.firstName = "Only letters allowed";
    }

    // Last Name
    if (!data.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z\s]+$/.test(data.lastName)) {
      newErrors.lastName = "Only letters allowed";
    }

    // Email
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Invalid email address";
    }

    // Phone (optional but validated if filled)
    if (
      data.phone &&
      !/^[0-9+\-\s()]{7,20}$/.test(data.phone)
    ) {
      newErrors.phone = "Invalid phone number";
    }

    // Country
    if (!data.country) {
      newErrors.country = "Please select a country";
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
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            company: data.company,
            phone: data.phone,
            country: data.country,
            details: data.details,
            formType: "consultation",
          },
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        ),
        submitToGoogleSheet("consultation", data),
      ]);

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContainer}>
        {/* Left content */}
        <div className={styles.contactInfo}>
          <h2>Get Free Consultation</h2>
        </div>

        {/* Form */}
        <form
          className={styles.contactForm}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={styles.formInputs}>
            {/* First Name */}
            <div>
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                className={errors.firstName ? styles.inputError : ""}
              />
              {errors.firstName && (
                <span className={styles.fieldError}>
                  {errors.firstName}
                </span>
              )}
            </div>

            {/* Last Name */}
            <div>
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                className={errors.lastName ? styles.inputError : ""}
              />
              {errors.lastName && (
                <span className={styles.fieldError}>
                  {errors.lastName}
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

            {/* Company */}
            <div>
              <input
                name="company"
                type="text"
                placeholder="Company"
                className={errors.company ? styles.inputError : ""}
              />
              {errors.company && (
                <span className={styles.fieldError}>
                  {errors.company}
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

            {/* Country */}
            <div>
              <select
                name="country"
                defaultValue=""
                className={errors.country ? styles.inputError : ""}
              >
                <option value="" disabled>
                  Country
                </option>

                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              {errors.country && (
                <span className={styles.fieldError}>
                  {errors.country}
                </span>
              )}
            </div>

            {/* Inquiry Details */}
            <div style={{ gridColumn: "1 / -1" }}>
              <textarea
                name="details"
                placeholder="Inquiry Details..."
                className={errors.details ? styles.inputError : ""}
              />
              {errors.details && (
                <span className={styles.fieldError}>
                  {errors.details}
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
