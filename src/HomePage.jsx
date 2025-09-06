import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [carouselHeight, setCarouselHeight] = useState(
    window.innerWidth < 768 ? "60vh" : "100vh"
  );

  useEffect(() => {
    const handleResize = () => {
      setCarouselHeight(window.innerWidth < 768 ? "60vh" : "100vh");
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    { title: "Reusable Bags", desc: "Eco-friendly shopping bags" },
    { title: "Organic Food", desc: "Healthy & sustainable" },
    { title: "Bamboo Products", desc: "Durable & natural" },
    { title: "Eco Gadgets", desc: "Smart & sustainable tech" },
  ];

  const products = [
    { name: "Reusable Plate", price: 199, img: "/reusableplate.jpeg" },
    { name: "Reusable Bag", price: 299, img: "/reusable.jpeg" },
    { name: "Bag", price: 399, img: "/bag.jpeg" },
    { name: "Combo", price: 399, img: "/combo.jpeg" },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", overflowX: "hidden", width: "100vw" }}>
      {/* ================= Hero Carousel ================= */}
      <div id="ecoCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/ecobanner.jpg"
              alt="Eco Banner"
              style={{
                width: "100vw",
                height: carouselHeight,
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{
                top: 0,
                bottom: 0,
                width: "100%",
                margin: "0 auto",
                textAlign: "center",
                padding: "0 10px",
              }}
            >
              <p
                style={{
                  fontSize: window.innerWidth < 768 ? "1rem" : "1.2rem",
                  color: "#fff",
                  fontWeight: "700",
                  marginBottom: "1rem",
                }}
              >
                Discover eco-friendly products that make a difference.
              </p>
              <Link
                className="btn btn-success"
                to="/shop"
                style={{ borderRadius: "50px", padding: "0.5rem 2rem" }}
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/ecobanner2.jpg"
              alt="Eco Products"
              style={{
                width: "100vw",
                height: carouselHeight,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#ecoCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#ecoCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* ================= Categories Section ================= */}
      <section style={{ width: "100vw", padding: "3rem 0", backgroundColor: "#f8f9fa" }}>
        <h3 style={{ textAlign: "center", fontWeight: "700", marginBottom: "2rem" }}>
          🌱 Shop by Category
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 220px",
                maxWidth: "250px",
                padding: "1rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                borderRadius: "10px",
                textAlign: "center",
                transition: "transform 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h5 style={{ fontWeight: "700" }}>{cat.title}</h5>
              <p style={{ color: "#6c757d" }}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Featured Products Section ================= */}
      <section style={{ width: "100vw", padding: "3rem 0" }}>
        <h3 style={{ textAlign: "center", fontWeight: "700", marginBottom: "2rem" }}>
          ✨ Featured Products
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 250px",
                maxWidth: "300px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                minHeight: "350px",
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
                <h5>{product.name}</h5>
                <p style={{ fontWeight: "700", color: "#198754" }}>₹{product.price}</p>
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "#198754",
                    color: "#fff",
                    border: "none",
                    padding: "0.5rem",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Sustainable Living Tips Section ================= */}
      <section style={{ width: "100vw", padding: "3rem 0", backgroundColor: "#eaf0fb" }}>
        <h3 style={{ textAlign: "center", fontWeight: "700", marginBottom: "2rem" }}>
          🌱 Sustainable Living Tips
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {[
            "Use reusable bags instead of plastic.",
            "Switch to bamboo toothbrushes.",
            "Compost organic waste at home.",
            "Buy energy-efficient appliances.",
            "Reduce single-use plastics.",
            "Plant a tree every month."
          ].map((tip, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 220px",
                maxWidth: "250px",
                padding: "1rem",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                textAlign: "center",
              }}
            >
              <p style={{ fontWeight: "500", color: "#198754" }}>✅ {tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Customer Testimonials Section ================= */}
      <section style={{ width: "100vw", padding: "3rem 0", backgroundColor: "#f8f9fa" }}>
        <h3 style={{ textAlign: "center", fontWeight: "700", marginBottom: "2rem" }}>
          💬 What Our Customers Say
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {[
            { name: "Anita R.", feedback: "EcoFinds products are amazing! I switched to reusable bags and bamboo brushes." },
            { name: "Rohit S.", feedback: "High-quality eco products. Great initiative to save our planet." },
            { name: "Priya M.", feedback: "I love their combos. Sustainable and stylish!" },
          ].map((testimonial, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 250px",
                maxWidth: "300px",
                padding: "1rem",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              }}
            >
              <p style={{ fontStyle: "italic", color: "#6c757d" }}>"{testimonial.feedback}"</p>
              <p style={{ fontWeight: "700", marginTop: "1rem" }}>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Eco Impact Section ================= */}
      <section style={{ width: "100vw", padding: "3rem 0", backgroundColor: "#eaf0fb" }}>
        <h3 style={{ textAlign: "center", fontWeight: "700", marginBottom: "2rem" }}>
          🌏 Our Eco Impact
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          <div style={{ flex: "1 1 200px", maxWidth: "220px" }}>
            <h4 style={{ color: "#198754" }}>5000+</h4>
            <p>Trees Planted</p>
          </div>
          <div style={{ flex: "1 1 200px", maxWidth: "220px" }}>
            <h4 style={{ color: "#198754" }}>12000+</h4>
            <p>Reusable Bags Distributed</p>
          </div>
          <div style={{ flex: "1 1 200px", maxWidth: "220px" }}>
            <h4 style={{ color: "#198754" }}>3000+</h4>
            <p>Customers Embracing Sustainability</p>
          </div>
        </div>
      </section>

      {/* ================= Why Choose Us Section ================= */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "3rem 0" }}>
        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontWeight: "700", marginBottom: "2rem" }}>💚 Why Choose EcoFinds?</h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
            <div style={{ flex: "1 1 220px", maxWidth: "250px" }}>
              <h5>🌍 100% Eco-Friendly</h5>
              <p style={{ color: "#6c757d" }}>All products sourced responsibly.</p>
            </div>
            <div style={{ flex: "1 1 220px", maxWidth: "250px" }}>
              <h5>✅ Fair Trade</h5>
              <p style={{ color: "#6c757d" }}>Supporting ethical businesses.</p>
            </div>
            <div style={{ flex: "1 1 220px", maxWidth: "250px" }}>
              <h5>🚚 Carbon Neutral Shipping</h5>
              <p style={{ color: "#6c757d" }}>Delivered with care for the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Newsletter Section ================= */}
      <section style={{ textAlign: "center", margin: "3rem 0" }}>
        <h4 style={{ fontWeight: "700" }}>📩 Subscribe to Our Newsletter</h4>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "300px",
              maxWidth: "80%",
              borderRadius: "50px",
              padding: "0.5rem 1rem",
              border: "1px solid #ced4da",
            }}
          />
          <button
            style={{
              borderRadius: "50px",
              padding: "0.5rem 2rem",
              border: "none",
              backgroundColor: "#198754",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* ================= Footer ================= */}
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

export default HomePage;
