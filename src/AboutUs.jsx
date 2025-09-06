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
      <section style={{ padding: "4rem 1rem", backgroundColor: "#f8f9fa" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/ourstory.jpeg"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                }}
              />
            </div>
            <div className="col-md-6">
              <h2 style={{ fontWeight: "700", marginBottom: "1rem" }}>Our Story</h2>
              <p style={{ color: "#6c757d", fontSize: "1rem", lineHeight: "1.6" }}>
                EcoFinds started with a mission to promote sustainable living by
                providing eco-friendly alternatives for everyday products. Our
                goal is to reduce environmental impact while maintaining style
                and quality.
              </p>
              <p style={{ color: "#6c757d", fontSize: "1rem", lineHeight: "1.6" }}>
                From reusable bags to bamboo gadgets, we carefully select products
                that are not only practical but also sustainable. By choosing
                EcoFinds, you join us in building a greener future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ padding: "4rem 1rem" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="row align-items-center">
            {/* Mission with image */}
            <div className="col-md-6 mb-4">
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

            {/* Vision text */}
            <div className="col-md-6 mb-4">
              <div
                style={{
                  padding: "2rem",
                  borderRadius: "15px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  backgroundColor: "#eaf0fb",
                  height: "100%",
                }}
              >
                <h3 style={{ fontWeight: "700", marginBottom: "1rem" }}>Our Vision</h3>
                <p style={{ color: "#0d6efd", fontSize: "1rem", lineHeight: "1.6" }}>
                  To be a global leader in sustainable products, making it easier
                  for everyone to live a more eco-conscious lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (No Images) */}
      <section style={{ padding: "4rem 1rem", backgroundColor: "#f8f9fa" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontWeight: "700", marginBottom: "3rem" }}>
            Meet Our Team
          </h2>
          <div className="row text-center">
            {[1, 2, 3].map((member) => (
              <div className="col-md-4 mb-4" key={member}>
                <div
                  style={{
                    padding: "1rem",
                    borderRadius: "15px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    backgroundColor: "#fff",
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#198754",
          color: "#fff",
          textAlign: "center",
          padding: "2rem 0",
        }}
      >
        <p style={{ marginBottom: "0.5rem" }}>
          © {new Date().getFullYear()} <strong>EcoFinds</strong>. All rights reserved.
        </p>
        <div>🌍 Facebook | 🐦 Twitter | 📸 Instagram</div>
      </footer>
    </div>
  );
};

export default AboutUs;
