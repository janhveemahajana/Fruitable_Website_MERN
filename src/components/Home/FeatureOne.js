import React, { useEffect, useState } from "react";
import axios from "axios";

function FeatureOne() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getservices"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container-fluid featurs py-5">
      <div className="container py-5">
        <h1 className="mb-5 text-centre ms-5">Our Services</h1>
        <div className="row g-4">
          {products.map((product) => {
            return (
              <div className="col-md-6 col-lg-3" key={product._id}>
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <img
                        src={`http://localhost:5000${product.icon}`}
                        alt={product.title}
                        className="icon"
                        onError={(e) => (e.target.src = "/assets/img/featur-3.jpg")}
                        style={{ width: "50px", height: "auto" }}
                      />
                  </div>
                  <div className="featurs-content text-center">
                    <h5>{product.title}</h5>
                    <p className="mb-0">{product.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeatureOne;
