import React from "react";

const AboutUs = () => {
  return (
    <div style={{ fontFamily: "sans-serif", overflowX: "hidden" }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: "url('/aboutbanner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontWeight: "700",
            fontSize: "3rem",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          About Us
        </h1>
      </div>

      {/* Our Story Section */}
      <section style={{ display: "flex", flexWrap: "wrap", minHeight: "60vh", padding: "4rem 2rem", backgroundColor: "#f8f9fa" }}>
        <div style={{ flex: "1 1 50%", padding: "1rem" }}>
          <img
            src="/ourstory.jpeg"
            style={{
              width: "100%",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          />
        </div>
        <div style={{ flex: "1 1 50%", padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontWeight: "700", marginBottom: "1rem" }}>Our Story</h2>
          <p style={{ color: "#6c757d", fontSize: "1rem", lineHeight: "1.6" }}>
            EcoFinds was born out of the need to provide eco-friendly alternatives
            for everyday products. We aim to reduce environmental harm while helping
            people live a stylish, sustainable lifestyle.
          </p>
          <p style={{ color: "#6c757d", fontSize: "1rem", lineHeight: "1.6" }}>
            From reusable bags to bamboo gadgets, every product we select is designed
            to minimize waste and promote a greener future. By choosing EcoFinds,
            you join a movement of conscious consumers making a real difference.
          </p>
        </div>
      </section>

      {/* Environment Impact Section */}
      <section style={{ display: "flex", flexWrap: "wrap", minHeight: "50vh", padding: "4rem 2rem" }}>
        <div style={{ flex: "1 1 50%", padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#eaf0fb", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
          <h3 style={{ fontWeight: "700", color: "#0d6efd", marginBottom: "1rem" }}>Our Environmental Impact</h3>
          <p style={{ color: "#333", fontSize: "1rem", lineHeight: "1.6" }}>
            Every purchase from EcoFinds contributes to a cleaner planet. On average,
            our customers help save hundreds of plastic bottles and reduce carbon emissions
            by choosing sustainable alternatives. Our mission goes beyond selling products—
            it’s about inspiring change and creating a community of eco-conscious individuals.
          </p>
        </div>
        <div style={{ flex: "1 1 50%", padding: "1rem" }}>
          <img
            src="/ecoimpact.jpg"
            style={{
              width: "100%",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ display: "flex", flexWrap: "wrap", padding: "4rem 2rem", backgroundColor: "#f8f9fa" }}>
        <div style={{ flex: "1 1 50%", padding: "1rem" }}>
          <img
            src="/aboutbanner.jpg"
            alt="Our Mission"
            style={{
              width: "100%",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          />
        </div>
        <div style={{ flex: "1 1 50%", padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#eaf0fb", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
          <h3 style={{ fontWeight: "700", marginBottom: "1rem" }}>Our Vision</h3>
          <p style={{ color: "#0d6efd", fontSize: "1rem", lineHeight: "1.6" }}>
            To become a global leader in sustainable products, making it easier
            for everyone to live eco-conscious lives and protecting the planet
            for generations to come.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: "4rem 2rem" }}>
        <h2 style={{ textAlign: "center", fontWeight: "700", marginBottom: "3rem" }}>
          Meet Our Team
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {[1, 2, 3].map((member) => (
            <div
              key={member}
              style={{
                flex: "1 1 300px",
                margin: "1rem",
                padding: "1.5rem",
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                textAlign: "center",
              }}
            >
              <h5 style={{ fontWeight: "700", marginBottom: "0.5rem" }}>
                {member === 1
                  ? "Salman Khan"
                  : member === 2
                  ? "Nilu Sharma"
                  : "Alex Doe"}
              </h5>
              <p style={{ color: "#6c757d" }}>
                {member === 1
                  ? "Founder & CEO"
                  : member === 2
                  ? "Co-Founder & CTO"
                  : "Marketing Head"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#198754", color: "#fff", textAlign: "center", padding: "2rem 0" }}>
        <p style={{ marginBottom: "0.5rem" }}>
          © {new Date().getFullYear()} <strong>EcoFinds</strong>. All rights reserved.
        </p>
        <div>🌍 Facebook | 🐦 Twitter | 📸 Instagram</div>
      </footer>
    </div>
  );
};

export default AboutUs;
