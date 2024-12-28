import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import TestimonialContent from "./TestimonialContent";
import TestimonialHeader from "./TestimonialHeader";
import Spinner from "../Spinner";

const TestimonialPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <div>
      <Navbar />
      <Spinner loading={loading} />
      <TestimonialHeader />
      <TestimonialContent />
      <Footer />

      <Link
        to={"/testimonial"}
        class="btn btn-primary border-3 border-primary rounded-circle back-to-top"
      >
        <i class="fa fa-arrow-up"></i>
      </Link>
    </div>
  );
};

export default TestimonialPage;
