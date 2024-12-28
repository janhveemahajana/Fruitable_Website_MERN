import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pagination.css";
// Pagination component
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="pagination d-flex justify-content-center mt-5">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-btn mx-1"
      >
        &laquo; {/* Previous page symbol */}
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`pagination-btn mx-1 ${
            currentPage === i + 1 ? "active" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-btn mx-1"
      >
        &raquo; {/* Next page symbol */}
      </button>
    </div>
  );
};

// Main component
const FruitList = () => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [fruitsData, setFruitsData] = useState([]); // State for fetched data
  const [sortedFruits, setSortedFruits] = useState([]);
  const [sortOption, setSortOption] = useState("Nothing");

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/shopgetAll");
        setFruitsData(response.data); // Save fetched data
        setSortedFruits(response.data); // Initialize sorted data
      } catch (error) {
        console.error("Error fetching fruits:", error);
      }
    };
    fetchFruits();
  }, []);

  const totalPages = Math.ceil(sortedFruits.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedFruits.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    setSortOption(sortValue);
    let sortedArray = [...fruitsData];

    if (sortValue === "Popularity") {
      sortedArray.sort((a, b) => b.popularity - a.popularity);
    } else if (sortValue === "Organic") {
      sortedArray.sort((a, b) => a.popularity - b.popularity);
    } else if (sortValue === "Fantastic") {
      sortedArray.sort((a, b) => b.popularity - a.popularity);
    }

    setSortedFruits(sortedArray);
    setCurrentPage(1); // Reset to first page on sort change
  };

  return (
    <div className="col-lg-9">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="col-xl-9">
          <h2>Fruit List</h2>
        </div>
        <div className="col-xl-3">
          <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between">
            <label htmlFor="sorting">Default Sorting:</label>
            <select
              id="sorting"
              name="sorting"
              className="border-0 form-select-sm bg-light me-3"
              onChange={handleSortChange}
              value={sortOption}
            >
              <option value="Nothing">Nothing</option>
              <option value="Popularity">Popularity</option>
              <option value="Organic">Organic</option>
              <option value="Fantastic">Fantastic</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row g-4 justify-content-center">
        {currentItems.map((fruit) => (
          <div className="col-md-6 col-lg-6 col-xl-4" key={fruit._id}>
            <div className="rounded position-relative fruite-item">
              <div className="fruite-img">
                <img
                  src={`http://localhost:5000${fruit.image}`}
                  className="img-fluid w-100 rounded-top"
                  alt={fruit.name}
                />
              </div>
              <div
                className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                style={{ top: "10px", left: "10px" }}
              >
                {fruit.label}
              </div>
              <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4>{fruit.title}</h4>
                <p>{fruit.description}</p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">${fruit.newprice}/kg</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-12">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FruitList;