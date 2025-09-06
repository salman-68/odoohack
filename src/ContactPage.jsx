import React, { useState } from "react";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setSuccessMsg("Please fill all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8758/api/contact/save", formData);

      if (response.status === 200 || response.status === 201) {
        setSuccessMsg("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccessMsg("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMsg("Failed to send message. Please check your backend connection.");
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left: Contact Form */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem",
          boxSizing: "border-box",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", maxWidth: "500px", display: "flex", flexDirection: "column" }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
            Contact Us
          </h2>

          {successMsg && (
            <p
              style={{
                textAlign: "center",
                color: successMsg.includes("successfully") ? "green" : "red",
                marginBottom: "1.5rem",
                fontWeight: "500",
              }}
            >
              {successMsg}
            </p>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              marginBottom: "1.5rem",
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              marginBottom: "1.5rem",
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            style={{
              width: "100%",
              padding: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              resize: "vertical",
              marginBottom: "1.5rem",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "1rem",
              backgroundColor: "#198754",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#157347")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#198754")}
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right: Environmental Passage */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#e6f7e6",
          padding: "4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "#2e7d32", marginBottom: "1rem" }}>Protect Our Planet</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#333" }}>
          Every action counts when it comes to preserving our environment. Small steps like
          reducing waste, conserving water, and planting trees can make a huge difference.
          Your contribution helps in creating a greener, cleaner, and healthier planet for
          future generations. Let's work together to reduce our carbon footprint and embrace
          sustainable living. 🌱
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
