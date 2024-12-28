import React, { useState, useEffect } from 'react';
import Footer from "../Footer"
import Navbar from "../Navbar"
import ShopContent from "./ShopContent"
import ShopHeader from "./ShopHeader"
import Spinner from "../Spinner";

const ShopPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        setTimeout(() => setLoading(false), 500);
    }, []);

    return(
        <div>
            <Navbar/>
            <Spinner loading={loading}/>
            <ShopHeader/>
            <ShopContent/>
            <Footer/>

            <a href="#" class="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>
        </div>
    )
}

export default ShopPage;