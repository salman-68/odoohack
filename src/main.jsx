import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./CartContext.jsx"; // ✅ Import provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* ✅ Wrap App with CartProvider */}
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
