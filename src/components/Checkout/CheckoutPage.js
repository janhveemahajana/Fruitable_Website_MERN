import React, { useState, useEffect } from 'react';
import Footer from "../Footer"
import Navbar from "../Navbar"
import CheckoutContent from "./CheckoutContent";
import CheckoutHeader from "./CheckoutHeader";
import Spinner from "../Spinner";

const CheckoutPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        setTimeout(() => setLoading(false), 500);
    }, []);

    return(
        <div>
            <Navbar/>
            <Spinner loading={loading}/> 
            <CheckoutHeader/>
            <CheckoutContent/>
            <Footer/>

            <a href="#" class="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>
        </div>
    )
}

export default CheckoutPage;