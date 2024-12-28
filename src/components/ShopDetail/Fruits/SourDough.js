import React, { useState } from "react";

const Sourdough = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
    };

    return (
            <div className="row g-4">
                <div className="col-lg-6">
                    <div className="border rounded">
                        <a href="#">
                            <img
                                src="/assets/img/bread-item-3.jpg"
                                className="img-fluid rounded"
                                alt="Sourdough"
                            />
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h4 className="fw-bold mb-3">Sourdough</h4>
                    <p className="mb-3">Category: Bread</p>
                    <h5 className="fw-bold mb-3">5,50 $</h5>
                    <div className="d-flex mb-4">
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <p className="mb-4">
                        Freshly baked sourdough bread with a tangy flavor and perfect crust.
                    </p>
                    <p className="mb-4">
                        Ideal for sandwiches, toast, or served alongside your favorite soups and salads.
                    </p>

                    <div
                        className="input-group quantity mb-5"
                        style={{ width: "100px" }}
                    >
                        <div className="input-group-btn">
                            <button
                                className="btn btn-sm btn-minus rounded-circle bg-light border"
                                onClick={handleDecrement}
                            >
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <input
                            type="text"
                            className="form-control form-control-sm text-center border-0"
                            value={quantity}
                            readOnly
                        />
                        <div className="input-group-btn">
                            <button
                                className="btn btn-sm btn-plus rounded-circle bg-light border"
                                onClick={handleIncrement}
                            >
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                    >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                        to cart
                    </a>
                </div>
                <div className="col-lg-12">
                    <nav>
                        <div className="nav nav-tabs mb-3">
                            <button
                                className="nav-link active border-white border-bottom-0"
                                type="button"
                                role="tab"
                                id="nav-about-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-about"
                                aria-controls="nav-about"
                                aria-selected="true"
                            >
                                Description
                            </button>
                            <button
                                className="nav-link border-white border-bottom-0"
                                type="button"
                                role="tab"
                                id="nav-mission-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-mission"
                                aria-controls="nav-mission"
                                aria-selected="false"
                            >
                                Reviews
                            </button>
                        </div>
                    </nav>
                    <div className="tab-content mb-5">
                        <div
                            className="tab-pane active"
                            id="nav-about"
                            role="tabpanel"
                            aria-labelledby="nav-about-tab"
                        >
                            <p>
                                Our sourdough bread is made with a traditional recipe and naturally fermented for a rich taste.
                            </p>
                            <p>
                                Perfect for enhancing your meals, it's baked daily to ensure maximum freshness and flavor.
                            </p>
                            <div className="px-2">
                                <div className="row g-4">
                                    <div className="col-6">
                                        <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                            <div className="col-6">
                                                <p className="mb-0">Weight</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">1 Loaf</p>
                                            </div>
                                        </div>
                                        <div className="row text-center align-items-center justify-content-center py-2">
                                            <div className="col-6">
                                                <p className="mb-0">Country of Origin</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">Local Bakery</p>
                                            </div>
                                        </div>
                                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                            <div className="col-6">
                                                <p className="mb-0">Quality</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">Artisan</p>
                                            </div>
                                        </div>
                                        <div className="row text-center align-items-center justify-content-center py-2">
                                            <div className="col-6">
                                                <p className="mb-0">Check</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">Fresh</p>
                                            </div>
                                        </div>
                                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                            <div className="col-6">
                                                <p className="mb-0">Min Quantity</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">1 Loaf</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane"
                            id="nav-mission"
                            role="tabpanel"
                            aria-labelledby="nav-mission-tab"
                        >
                            <div className="d-flex">
                                <img
                                    src="assets/img/avatar.jpg"
                                    className="img-fluid rounded-circle p-3"
                                    style={{ width: "100px", height: "100px" }}
                                    alt="User Avatar"
                                />
                                <div className="">
                                    <p className="mb-2" style={{ fontSize: "14px" }}>
                                        April 18, 2024
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <h5>Emily Carter</h5>
                                        <div className="d-flex mb-3">
                                            <i className="fa fa-star text-secondary"></i>
                                            <i className="fa fa-star text-secondary"></i>
                                            <i className="fa fa-star text-secondary"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <p>
                                        Best sourdough I've ever had! Delicious with a perfect crust and soft interior.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form action="#">
                    <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="border-bottom rounded">
                                <input
                                    type="text"
                                    className="form-control border-0 me-4"
                                    placeholder="Your Name *"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="border-bottom rounded">
                                <input
                                    type="email"
                                    className="form-control border-0"
                                    placeholder="Your Email *"
                                />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="border-bottom rounded my-4">
                                <textarea
                                    className="form-control border-0"
                                    cols="30"
                                    rows="8"
                                    placeholder="Your Review *"
                                    spellCheck="false"
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-between py-3 mb-5">
                                <div className="d-flex align-items-center">
                                    <p className="mb-0 me-3">Please rate:</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa fa-star text-muted"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="btn border border-secondary text-primary rounded-pill px-4 py-3"
                                >
                                    Post Comment
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default Sourdough;