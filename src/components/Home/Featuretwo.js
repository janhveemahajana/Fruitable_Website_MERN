import React, { useEffect, useState } from "react";
import axios from "axios";

function Featuretwo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/api/getalldeal");
      setProducts(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <h1 className="fw-bold mb-0 text-start ms-5">Related products</h1> */}

      <div className="container-fluid service py-5">
        <div className="container py-5">
          <h1 className="mb-4 text-centre ms-2">Our Deals</h1>
          <div className="row g-4 justify-content-center">
            {products.map((product, index) => {
              return (
                <div className="col-md-6 col-lg-4">
                  <a href="#">
                    <div className="service-item bg-secondary rounded border border-secondary">
                      <img
                        src={`http://localhost:5000/${product.image}`}
                        alt={product.heading}
                        className="img-fluid rounded-top w-100"
                        style={{ width: "100px", height: "auto" }}
                      />
                      <div className="px-4 rounded-bottom">
                        <div className="service-content bg-primary text-center p-4 rounded">
                          <h5 className="text-white">{product.heading1}</h5>
                          <h3 className="mb-0">{product.heading2}</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featuretwo;
