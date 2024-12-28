import React, { useState, useEffect } from "react";
import axios from "axios";

function Hero() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/gethero")
      .then((response) => {
        console.log("API Response:", response.data);
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching hero data:", error);
        setLoading(false);
      });

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/slidergetAll"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>No contact data found</p>;
  }

  return (
    <div className="container-fluid py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-12 col-lg-7">
            <h4 className="mb-3 text-secondary">
              <span
                dangerouslySetInnerHTML={{ __html: product.headingone }}
              ></span>
            </h4>
            <h1 className="mb-5 display-3 text-primary">
              <span
                dangerouslySetInnerHTML={{ __html: product.headingtwo }}
              ></span>
            </h1>
            <div className="position-relative mx-auto">
              <input
                className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                type="number"
                placeholder="Search"
              />
              <button
                type="submit"
                className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                style={{ top: "0", right: "25%" }}
              >
                Submit Now
              </button>
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <div
              id="carouselId"
              className="carousel slide position-relative"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                {products.map((product, index) => (
                  <div
                    className={`carousel-item ${
                      index === 0 ? "active" : ""
                    } rounded position-relative`}
                    key={product.id || index}
                  >
                    <img
                      src={`http://localhost:5000${product.image}`}
                      alt={product.title}
                      className="img-fluid w-100 h-100 bg-secondary rounded"
                      onError={(e) =>
                        (e.target.src = "/assets/img/featur-3.jpg")
                      }
                      style={{ width: "600px", height: "400px" }}
                    />
                    <h5
                      className="btn px-4 py-2 text-white rounded position-absolute"
                      style={{
                        top: "50%", // Center vertically
                        left: "50%", // Center horizontally
                        transform: "translate(-50%, -50%)", // Adjust for center alignment
                        backgroundColor: "rgba(228, 144, 10, 0.66)", // Optional: Add a semi-transparent background
                        fontSize: "25px",
                      }}
                    >
                      {product.label}
                    </h5>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
