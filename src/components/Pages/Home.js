import React from 'react';
import About from '../Home/About';
import Banner from '../Home/Banner';
import HomeReview from '../Home/HomeReview';
import NewProduct from '../Home/NewProduct';
import Products from '../Home/Products';
import Summery from '../Home/Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewProduct></NewProduct>
            <Products></Products>
            <Summery></Summery>
            <HomeReview></HomeReview>
            <About></About>
        </div>
    );
};

export default Home;