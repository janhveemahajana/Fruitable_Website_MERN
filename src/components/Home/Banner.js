import React, { useState, useEffect } from "react";
import axios from "axios";

function Banner() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getexoticfruit")
      .then((response) => {
        console.log("API Response:", response.data);
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching banner data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>No contact data found</p>;
  }

  return (
    <div className="container-fluid banner bg-secondary my-5">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="display-3 text-white">
                <span
                  dangerouslySetInnerHTML={{ __html: product.heading1 }}
                  style={{fontSize:"50px"}}
                ></span>
              </h1>
              <p className="fw-normal display-3 text-dark mb-4">
                <span
                  dangerouslySetInnerHTML={{ __html: product.heading2 }}
                ></span>
              </p>
              <p className="mb-4 text-dark">
                <span
                  dangerouslySetInnerHTML={{ __html: product.heading3 }}
                ></span>
              </p>
              <a
                href="#"
                className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
              >
                BUY
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                type="image"
                src={`http://localhost:5000${product.image}`}
                alt={product.title}
                className="product-image img-fluid w-100 rounded"
                onError={(e) => (e.target.src = "/assets/img/featur-3.jpg")}
                style={{ width: "100px", height: "auto" }}
              />
              <div
                className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                style={{ width: "140px", height: "140px", top: "0", left: "0" }}
              >
                <h1 style={{ fontSize: "100px" }}>1</h1>
                <div className="d-flex flex-column">
                  <span className="h2 mb-0">50$</span>
                  <span className="h4 text-muted mb-0">kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
