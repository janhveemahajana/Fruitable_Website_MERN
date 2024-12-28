import React from "react";

function Spinner({ loading }) {
  return (
    <div
      id="spinner"
      className={`w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center ${
        loading ? "show" : ""
      }`}
    >
      <div className="spinner-grow text-primary" role="status"></div>
    </div>
  );
}

export default Spinner;


