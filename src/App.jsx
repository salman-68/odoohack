import React, { useContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import AuthPage from "./AuthPage";
import ContactPage from "./ContactPage";
import ShoppingPage from "./ShoppingPage";
import CartPage from "./CartPage"; // ✅ Add CartPage
import { CartContext } from "./CartContext"; // ✅ Import cart context

function App() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { cart } = useContext(CartContext); // ✅ Access cart to show item count

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/auth");
    window.location.reload(); // Refresh navbar after logout
  };

  return (
    <>
      {/* ================= Navbar ================= */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand fw-bold" to="/">
            EcoFinds
          </Link>

          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/cart">
                  🛒 Cart {cart.length > 0 && `(${cart.length})`}
                </Link>
              </li>

              {/* User Info / Login */}
              {currentUser ? (
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{ cursor: "pointer" }}
                  >
                    {currentUser.username}
                  </span>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <span className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </span>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/contact">
                    Login / Sign Up
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* ================= Routes ================= */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<AuthPage />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route path="/cart" element={<CartPage />} /> 
      </Routes>
    </>
  );
}

export default App;
