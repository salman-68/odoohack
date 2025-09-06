import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

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
            {cart.map((item, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
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
                    <p className="fw-bold">₹{item.price}</p>
                    <button
                      className="btn btn-danger mt-auto"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <h4>Total: ₹{totalPrice}</h4>
            <button className="btn btn-success mt-2">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
