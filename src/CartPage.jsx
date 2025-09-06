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

  // Total price based on quantity
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
              <button
                className="btn btn-success mt-2"
                onClick={handleCheckout}
              >
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
        </>
      )}
    </div>
  );
};

export default CartPage;
