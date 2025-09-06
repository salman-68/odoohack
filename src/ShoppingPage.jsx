import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";

const ShoppingPage = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Reusable Plate", price: 199, img: "/reusableplate.jpeg", desc: "Eco-friendly, durable plate.", eco: "Saves 1.5kg CO₂" },
    { id: 2, name: "Reusable Bag", price: 149, img: "/reusable.jpg", desc: "Sturdy cloth bag for shopping.", eco: "Saves 2kg CO₂" },
    { id: 3, name: "Eco Bottle", price: 299, img: "/bag.jpeg", desc: "Refillable water bottle.", eco: "Saves 3kg CO₂" },
    { id: 4, name: "Bamboo Toothbrush", price: 99, img: "/toothbrush.jpg", desc: "Biodegradable bamboo toothbrush.", eco: "Saves 0.5kg CO₂" },
    { id: 5, name: "Eco Notebook", price: 129, img: "/notebook.jpg", desc: "Made from recycled paper.", eco: "Saves 1kg CO₂" },
    { id: 6, name: "Solar Light", price: 899, img: "/solarlight.jpg", desc: "Charge with sunlight.", eco: "Saves 4kg CO₂" },
    { id: 7, name: "Reusable Straw", price: 59, img: "/straw.jpg", desc: "Washable metal straw.", eco: "Saves 0.2kg CO₂" },
    { id: 8, name: "Eco Lunch Box", price: 399, img: "/lunchbox.jpg", desc: "Reusable lunch container.", eco: "Saves 2.5kg CO₂" },
    { id: 9, name: "Jute Bag", price: 249, img: "/jutebag.jpg", desc: "Natural fiber shopping bag.", eco: "Saves 2kg CO₂" },
    { id: 10, name: "Eco Cup", price: 199, img: "/cup.jpg", desc: "Reusable coffee cup.", eco: "Saves 1.8kg CO₂" },
    { id: 11, name: "Eco Soap", price: 79, img: "/soap.jpg", desc: "Organic handmade soap.", eco: "Saves 0.3kg CO₂" },
    { id: 12, name: "Recycled Pen", price: 39, img: "/pen.jpg", desc: "Made from recycled plastic.", eco: "Saves 0.1kg CO₂" },
    { id: 13, name: "Eco Bag Pack", price: 799, img: "/bagpack.jpg", desc: "Sustainable backpack.", eco: "Saves 3.2kg CO₂" },
    { id: 14, name: "Eco Candle", price: 249, img: "/candle.jpg", desc: "Soy wax natural candle.", eco: "Saves 0.6kg CO₂" },
    { id: 15, name: "Eco Mat", price: 499, img: "/mat.jpg", desc: "Yoga mat from natural rubber.", eco: "Saves 2.2kg CO₂" },
    { id: 16, name: "Eco Detergent", price: 199, img: "/detergent.jpg", desc: "Plant-based cleaning solution.", eco: "Saves 1.4kg CO₂" },
    { id: 17, name: "Eco Slippers", price: 349, img: "/slippers.jpg", desc: "Made from recycled rubber.", eco: "Saves 1.9kg CO₂" },
    { id: 18, name: "Eco Basket", price: 279, img: "/basket.jpg", desc: "Handmade jute basket.", eco: "Saves 2.1kg CO₂" },
    { id: 19, name: "Eco Lamp", price: 999, img: "/lamp.jpg", desc: "Energy-saving lamp.", eco: "Saves 4.5kg CO₂" },
    { id: 20, name: "Eco Chair", price: 1299, img: "/chair.jpg", desc: "Bamboo wooden chair.", eco: "Saves 5.8kg CO₂" },
  ];
  // ✅ Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🛍 Shop Eco-Friendly Products</h2>

      <div className="row">
        {currentProducts.map((product) => (
          <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.name}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.desc}</p>
                <p className="text-success fw-bold">{product.eco}</p>
                <p className="fw-bold">₹{product.price}</p>
                <button
                  className="btn btn-success mt-auto"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ShoppingPage;
