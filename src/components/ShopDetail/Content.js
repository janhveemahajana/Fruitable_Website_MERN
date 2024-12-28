import React, { useState, useEffect } from "react";
import axios from "axios";
import Broccoli from "./Fruits/Broccoli";
import Banana from "./Fruits/Banana";
import Strawberry from "./Fruits/Strawberry";
import Sourdough from "./Fruits/SourDough";
import Chicken from "./Fruits/Chicken";
import Cabbage from "./Fruits/Cabbage";
import RelatedProduct from "./RelatedProduct";

const Content = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState("Broccoli");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getbanner")
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

  const renderSelectedProduct = () => {
    switch (selectedProduct) {
      case "Banana":
        return <Banana />;
      case "Strawberry":
        return <Strawberry />;
      case "Sourdough":
        return <Sourdough />;
      case "Chicken":
        return <Chicken />;
      case "Cabbage":
        return <Cabbage />;
      default:
        return <Broccoli />;
    }
  };

  return (
    <div className="container-fluid py-5 mt-5">
      <div
        className="container py-5"
      >
        <div className="row g-4 mb-5">
          {/* Main Product Content */}
          <div className="col-lg-8 col-xl-9">{renderSelectedProduct()}</div>

          {/* Sidebar */}
          <div className="col-lg-4 col-xl-3">
            <div className="row g-4">
              {/* Search Bar */}
              <div className="col-lg-12">
                <div className="input-group w-100 mx-auto mb-4">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>

              {/* Categories */}
              <div className="col-lg-12 mb-4">
                <h4>Categories</h4>
                <ul className="list-unstyled fruite-categorie">
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#">
                        <i className="fas fa-apple-alt me-2"></i>Apples
                      </a>
                      <span>(3)</span>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#">
                        <i className="fas fa-apple-alt me-2"></i>Oranges
                      </a>
                      <span>(5)</span>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#">
                        <i className="fas fa-apple-alt me-2"></i>Strawberry
                      </a>
                      <span>(2)</span>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#">
                        <i className="fas fa-apple-alt me-2"></i>Banana
                      </a>
                      <span>(8)</span>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#">
                        <i className="fas fa-apple-alt me-2"></i>Pumpkin
                      </a>
                      <span>(5)</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Featured Products */}
              <div className="col-lg-12">
                <h4 className="mb-4">Featured products</h4>

                {/* Big Banana */}
                <div
                  className="d-flex align-items-center justify-content-start mb-3"
                  onClick={() => setSelectedProduct("Banana")}
                >
                  <div
                    className="rounded me-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      src="/assets/img/vegetable-item-3.png"
                      className="img-fluid rounded"
                      alt="Big Banana"
                      style={{ width: "80px", height: "60px" }}
                    />
                  </div>
                  <div>
                    <h6 className="mb-0">Big Banana</h6>
                    <div className="d-flex mb-2">
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="d-flex mb-2">
                      <h5 className="fw-bold me-2">2.99 $</h5>
                      <h5 className="text-danger text-decoration-line-through">
                        4.11 $
                      </h5>
                    </div>
                  </div>
                </div>

                {/* Strawberry */}
                <div
                  className="d-flex align-items-center justify-content-start mb-3"
                  onClick={() => setSelectedProduct("Strawberry")}
                >
                  <div
                    className="rounded me-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      src="assets/img/featur-2.jpg"
                      className="img-fluid rounded"
                      alt="Strawberry"
                      style={{ width: "80px", height: "60px" }}
                    />
                  </div>
                  <div>
                    <h6 className="mb-2">Strawberry</h6>
                    <div className="d-flex mb-2">
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="d-flex mb-2">
                      <h5 className="fw-bold me-2">3.65 $</h5>
                      <h5 className="text-danger text-decoration-line-through">
                        5.22 $
                      </h5>
                    </div>
                  </div>
                </div>

                {/* Sourdough */}
                <div
                  className="d-flex align-items-center justify-content-start mb-3"
                  onClick={() => setSelectedProduct("Sourdough")}
                >
                  <div
                    className="rounded me-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      src="assets/img/shop-bread-item-3.jpg"
                      className="img-fluid rounded"
                      alt="Sourdough"
                      style={{ width: "80px", height: "60px" }}
                    />
                  </div>
                  <div>
                    <h6 className="mb-2">Sour Dough</h6>
                    <div className="d-flex mb-2">
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="d-flex mb-2">
                      <h5 className="fw-bold me-2">3.35 $</h5>
                      <h5 className="text-danger text-decoration-line-through">
                        4.11 $
                      </h5>
                    </div>
                  </div>
                </div>

                {/* Chicken */}
                <div
                  className="d-flex align-items-center justify-content-start mb-3"
                  onClick={() => setSelectedProduct("Chicken")}
                >
                  <div
                    className="rounded me-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      src="assets/img/shop-meat-item-1.png"
                      className="img-fluid rounded"
                      alt="Chicken"
                      style={{ width: "80px", height: "60px" }}
                    />
                  </div>
                  <div>
                    <h6 className="mb-2">Chicken</h6>
                    <div className="d-flex mb-2">
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="d-flex mb-2">
                      <h5 className="fw-bold me-2">2.50 $</h5>
                      <h5 className="text-danger text-decoration-line-through">
                        3.11 $
                      </h5>
                    </div>
                  </div>
                </div>

                {/* Cabbage */}
                <div
                  className="d-flex align-items-center justify-content-start"
                  onClick={() => setSelectedProduct("Cabbage")}
                >
                  <div
                    className="rounded me-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      src="assets/img/shop-vegetable-item-9.jpg"
                      className="img-fluid rounded"
                      alt="Cabbage"
                      style={{ width: "80px", height: "60px" }}
                    />
                  </div>
                  <div>
                    <h6 className="mb-2">Cabbage</h6>
                    <div className="d-flex mb-2">
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="d-flex mb-2">
                      <h5 className="fw-bold me-2">4.22 $</h5>
                      <h5 className="text-danger text-decoration-line-through">
                        6.50 $
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              {/* Banner */}
              <div className="col-lg-12 mt-4">
                <div className="position-relative">
                  <img
                    src={`http://localhost:5000${product.image}`}
                    alt={product.title}
                    className="product-image img-fluid w-100 rounded"
                    onError={(e) => (e.target.src = "/assets/img/featur-3.jpg")}
                  />
                  <div
                    className="position-absolute"
                    style={{
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <h3 className="text-secondary fw-bold">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: product.heading,
                        }}
                      ></span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Product */}
        <div className="row g-4">
          <RelatedProduct />
        </div>
      </div>
    </div>
  );
};

export default Content;
