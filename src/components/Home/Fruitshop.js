import React, { useState } from 'react';

function Fruitshop() {
    const [activeTab, setActiveTab] = useState("fruits"); // State to track active category

    const renderProductItem = (imageSrc, productName, price) => (
        <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="rounded position-relative fruite-item">
                <div className="fruite-img">
                    <img src={imageSrc} className="img-fluid w-100 rounded-top" alt={productName} />
                </div>
                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>
                    Fruits
                </div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>{productName}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">{price}</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                            <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    // Sample product data
    const productData = {
        fruits: [
            { image: "assets/img/fruite-item-5.jpg", name: "Grapes", price: "$4.99 / kg" },
            { image: "assets/img/fruite-item-2.jpg", name: "Raspberries", price: "$4.99 / kg" },
            { image: "assets/img/fruite-item-4.jpg", name: "Apricots", price: "$4.99 / kg" },
            { image: "assets/img/fruite-item-3.jpg", name: "Strawberries", price: "$4.99 / kg" },
        ],
        vegetables: [
            { image: "assets/img/vegetable-item-7.jpg", name: "Bittergourd", price: "$2.99 / kg" },
            { image: "assets/img/vegetable-item-8.jpg", name: "Carrot", price: "$3.99 / kg" },
            { image: "assets/img/vegetable-item-9.jpg", name: "Cabbage", price: "$1.99 / kg" },
        ],
        bread: [
            { image: "assets/img/bread-item-1.jpg", name: "Whole Wheat", price: "$2.49 / loaf" },
            { image: "assets/img/bread-item-3.jpg", name: "Sourdough", price: "$3.49 / loaf" },
        ],
        meat: [
            { image: "assets/img/meat-item-1.png", name: "Chicken", price: "$5.99 / kg" },
            { image: "assets/img/meat-item-2.png", name: "Beef", price: "$7.99 / kg" },
            { image: "assets/img/meat-item-3.png", name: "Fish", price: "$7.99 / kg" },
        ]
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container-fluid fruite py-5">
            <div className="container py-5">
                <div className="tab-class text-center">
                    <div className="row g-4">
                        <div className="col-lg-4 text-start">
                            <h1>Our Organic Products</h1>
                        </div>
                        <div className="col-lg-8 text-end">
                            <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                <li className="nav-item">
                                    <a
                                        className={`d-flex m-2 py-2 bg-light rounded-pill ${activeTab === "all" ? "active" : ""}`}
                                        onClick={() => handleTabChange("all")}
                                    >
                                        <span className="text-dark" style={{ width: '130px' }}>All Products</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`d-flex py-2 m-2 bg-light rounded-pill ${activeTab === "vegetables" ? "active" : ""}`}
                                        onClick={() => handleTabChange("vegetables")}
                                    >
                                        <span className="text-dark" style={{ width: '130px' }}>Vegetables</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`d-flex m-2 py-2 bg-light rounded-pill ${activeTab === "fruits" ? "active" : ""}`}
                                        onClick={() => handleTabChange("fruits")}
                                    >
                                        <span className="text-dark" style={{ width: '130px' }}>Fruits</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`d-flex m-2 py-2 bg-light rounded-pill ${activeTab === "bread" ? "active" : ""}`}
                                        onClick={() => handleTabChange("bread")}
                                    >
                                        <span className="text-dark" style={{ width: '130px' }}>Bread</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`d-flex m-2 py-2 bg-light rounded-pill ${activeTab === "meat" ? "active" : ""}`}
                                        onClick={() => handleTabChange("meat")}
                                    >
                                        <span className="text-dark" style={{ width: '130px' }}>Meat</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="tab-content">
                        {/* Tab Content: All Products */}
                        <div id="tab-1" className={`tab-pane fade show p-0 ${activeTab === "all" ? "active" : ""}`}>
                            <div className="row g-4">
                                {[
                                    ...productData.fruits,
                                    ...productData.vegetables,
                                    ...productData.bread,
                                    ...productData.meat,
                                ].map(item => renderProductItem(item.image, item.name, item.price))}
                            </div>
                        </div>

                        {/* Tab Content: Fruits */}
                        <div id="tab-2" className={`tab-pane fade show p-0 ${activeTab === "fruits" ? "active" : ""}`}>
                            <div className="row g-4">
                                {productData.fruits.map(item => renderProductItem(item.image, item.name, item.price))}
                            </div>
                        </div>

                        {/* Tab Content: Vegetables */}
                        <div id="tab-3" className={`tab-pane fade show p-0 ${activeTab === "vegetables" ? "active" : ""}`}>
                            <div className="row g-4">
                                {productData.vegetables.map(item => renderProductItem(item.image, item.name, item.price))}
                            </div>
                        </div>

                        {/* Tab Content: Bread */}
                        <div id="tab-4" className={`tab-pane fade show p-0 ${activeTab === "bread" ? "active" : ""}`}>
                            <div className="row g-4">
                                {productData.bread.map(item => renderProductItem(item.image, item.name, item.price))}
                            </div>
                        </div>

                        {/* Tab Content: Meat */}
                        <div id="tab-5" className={`tab-pane fade show p-0 ${activeTab === "meat" ? "active" : ""}`}>
                            <div className="row g-4">
                                {productData.meat.map(item => renderProductItem(item.image, item.name, item.price))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fruitshop;