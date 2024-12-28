import React, { useEffect, useState } from "react";
import axios from "axios";

function Facts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getfacts");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="bg-light p-5 rounded">
          <div className="row g-4 justify-content-center">
            {products.map((product) => {
              return (
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="counter bg-white rounded p-5">
                    <img
                      src={`http://localhost:5000${product.icon}`}
                      alt={product.title}
                      className="icon"
                      onError={(e) =>
                        (e.target.src = "/assets/img/featur-3.jpg")
                      }
                      style={{ width: "100px", height: "auto", color: "orange" }}
                    />
                    <h4>{product.title}</h4>
                    <h1>{product.description}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facts;
