import React from 'react';
import About from '../Home/About';
import Banner from '../Home/Banner';
import NewProduct from '../Home/NewProduct';
import Products from '../Home/Products';
import Summery from '../Home/Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewProduct></NewProduct>
            <Products></Products>
            <About></About>
            <Summery></Summery>
        </div>
    );
};

export default Home;