import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./components/Cart/CartContext";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ShopPage from "./components/ShopB/ShopPage";
import CartPage from "./components/Cart/CartPage";
import ContactPage from "./components/Contact/ContactPage";
import ShopDetailPage from "./components/ShopDetail/ShopDetailPage";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import HomePage from "./components/Home/HomePage";
import TestimonialPage from "./components/Testimonial/TestimonialPage";
import ScrollToTop from "./components/ScrollToTop";

const routing = (
  <CartProvider>
  <Router>
    <ScrollToTop />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shopdetail" element={<ShopDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/testimonial" element={<TestimonialPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <Toaster position="top-right" reverseOrder={false} />
    
      
  
  </Router>
  </CartProvider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(routing);

reportWebVitals();
