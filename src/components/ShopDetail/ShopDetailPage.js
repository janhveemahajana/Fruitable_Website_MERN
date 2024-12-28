import React, { useState, useEffect } from 'react';
import Content from "./Content";
import Footer from "../Footer";
import Header from "./Header";
import Navbar from "../Navbar";
import Spinner from "../Spinner";

const ShopDetailPage = () => {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        setTimeout(() => setLoading(false), 500);
    }, []);

  return (
    <div>
      <Navbar/>
      <Spinner loading={loading}/>
      <Header/>
      <Content/>
      <Footer/>
      <a
        href="#"
        class="btn btn-primary border-3 border-primary rounded-circle back-to-top"
      >
        <i class="fa fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default ShopDetailPage;
