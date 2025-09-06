import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (!currentUser) {
      navigate("/login");
    } else {
      setShowAddressForm(true);
    }
  };

  const handleOrderSubmit = () => {
    if (address.trim() === "") {
      alert("Please enter your delivery address.");
      return;
    }
    setOrderPlaced(true);
  };

  // Some sustainability tips to fill blank space
  const ecoTips = [
    "Use reusable bags instead of plastic.",
    "Choose products made from sustainable materials.",
    "Turn off electrical appliances when not in use.",
    "Recycle and compost whenever possible.",
    "Support local eco-friendly businesses.",
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <img
            src="/emptycart.png"
            alt="Empty Cart"
            style={{ width: "200px", marginBottom: "20px" }}
          />
          <h4>Your cart is empty</h4>
          <p>Explore our eco-friendly products to make a positive impact on the planet!</p>
        </div>
      ) : (
        <>
          <div className="row">
            {cart.map((item) => (
              <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.desc}</p>
                    <p className="text-success fw-bold">{item.eco}</p>
                    <p className="fw-bold">
                      ₹{item.price} × {item.quantity} = ₹
                      {item.price * item.quantity}
                    </p>

                    <div className="d-flex mt-auto">
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="align-self-center">{item.quantity}</span>
                      <button
                        className="btn btn-success ms-2"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <h4>Total: ₹{totalPrice}</h4>

            {!showAddressForm && !orderPlaced && (
              <button className="btn btn-success mt-2" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            )}

            {showAddressForm && !orderPlaced && (
              <div className="mt-3">
                <h5>Enter Delivery Address:</h5>
                <textarea
                  className="form-control my-2"
                  rows="3"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Your address here..."
                />
                <button
                  className="btn btn-primary mt-2"
                  onClick={handleOrderSubmit}
                >
                  Submit Order
                </button>
              </div>
            )}

            {orderPlaced && (
              <div className="alert alert-success mt-3">
                🎉 Your order has been placed! We will deliver soon.
              </div>
            )}
          </div>

          {/* ================= Sustainability Tips Section ================= */}
          <section className="mt-5" style={{ backgroundColor: "#f8f9fa", padding: "2rem", borderRadius: "10px" }}>
            <h4 className="text-center mb-4" style={{ color: "#198754" }}>🌱 Sustainability Tips</h4>
            <ul style={{ maxWidth: "600px", margin: "0 auto", listStyleType: "disc" }}>
              {ecoTips.map((tip, index) => (
                <li key={index} style={{ marginBottom: "0.8rem", color: "#6c757d", fontSize: "1rem" }}>
                  {tip}
                </li>
              ))}
            </ul>
            <p className="text-center mt-3" style={{ color: "#0d6efd" }}>
              By following these tips, you can help reduce your environmental footprint!
            </p>
          </section>

          {/* ================= Eco Facts Section ================= */}
          <section className="mt-4" style={{ textAlign: "center" }}>
            <h4 style={{ color: "#198754" }}>🌍 Fun Eco Facts</h4>
            <div className="row mt-3" style={{ justifyContent: "center", gap: "1rem" }}>
              <div style={{ flex: "1 1 200px", maxWidth: "250px", backgroundColor: "#eaf0fb", padding: "1rem", borderRadius: "10px" }}>
                <h5>5000+</h5>
                <p>Trees Planted</p>
              </div>
              <div style={{ flex: "1 1 200px", maxWidth: "250px", backgroundColor: "#eaf0fb", padding: "1rem", borderRadius: "10px" }}>
                <h5>12000+</h5>
                <p>Reusable Bags Distributed</p>
              </div>
              <div style={{ flex: "1 1 200px", maxWidth: "250px", backgroundColor: "#eaf0fb", padding: "1rem", borderRadius: "10px" }}>
                <h5>3000+</h5>
                <p>Eco-Friendly Customers</p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default CartPage;
