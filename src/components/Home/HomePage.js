import React, { useState, useEffect } from 'react';
import Footer from "../Footer";
import Navbar from "../Navbar";
import TestimonialContent from "../Testimonial/TestimonialContent";
import Banner from "./Banner";
import Bestseller from "./BestSeller";
import Facts from "./Facts";
import FeatureOne from "./FeatureOne";
import Featuretwo from "./Featuretwo";
import Fruitshop from "./Fruitshop";
import Hero from "./Hero";
import Spinner from "../Spinner";
// import Testimonial from "./Tastimonial";
import Vegetableshop from "./VegetableShop";

const HomePage = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        setTimeout(() => setLoading(false), 500);
    }, []);

    return(
        <div>
            <Navbar/>
            <Spinner loading={loading}/>        
            <Hero/>
            <FeatureOne/>
            <Fruitshop/>
            <Featuretwo/>
            <Vegetableshop/>
            <Banner/>
            <Bestseller/>
            <Facts/>
            {/* <Testimonial/> */}
            <TestimonialContent/>
            <Footer/>

            <a href="#" class="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>
        </div>
    )
}

export default HomePage;