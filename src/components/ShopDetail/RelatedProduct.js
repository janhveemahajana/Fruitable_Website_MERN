import OwlCarousel from "react-owl-carousel";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const RelatedProduct = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000, // Wait time before the next slide (3 seconds)
    autoplaySpeed: 1000, // Transition speed for autoplay (1 second)
    smartSpeed: 1000, // General sliding speed (1 second)
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getall");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* --------RELATED PRODUCTS--------- */}
      <h1 className="fw-bold mb-0">Related products</h1>
      <div className="container-fluid vesitable py-5">
        <div className="container py-5">
          <h1 className="mb-0">Fresh Organic Vegetables</h1>
          <OwlCarousel className="vegetable-carousel" {...options}>
            {/* Item 1 */}
            {products.map((product) => {
              return (
                <div key={product._id} className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src={`http://localhost:5000${product.image}`}
                      alt={product.title}
                      className="product-image img-fluid w-100 rounded-top"
                      onError={(e) =>
                        (e.target.src = "/assets/img/featur-3.jpg")
                      }
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    {product.label}
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">
                        ${product.price} / kg
                      </p>
                      <Link
                        to={'/detail'}
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
