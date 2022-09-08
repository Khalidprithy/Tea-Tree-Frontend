import React from 'react';
import bannerImg from '../../images/banner-img.png'
import { SiGooglechat } from 'react-icons/si';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-6'>
                <div className='flex flex-col justify-center p-10 mx-auto'>
                    <h1 className='text-5xl font-semibold text-neutral'>Organic Green Tea</h1>
                    <p className='mt-2 text-sm text-gray-500'>The steaming process creates a unique flavor profile that can be described as sweet, vegetal or seaweed-like. The Japanese style of green tea is characterized by steaming</p>
                    <div className='flex justify-start gap-4 mt-4'>
                        <button className='btn btn-md btn-outline rounded-sm'>Explore more</button>
                        <button className='btn btn-secondary rounded-sm'>Buy Now</button>
                    </div>
                    <div className='flex items-center mt-6'>
                        <button><SiGooglechat className='text-3xl text-secondary m-2'></SiGooglechat></button>
                        <p className='text-xs '>Chat with our business manager. We are always open for any kind of business discussion</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img className='w-48 ' src={bannerImg} alt="" />
                </div>
            </div>
            <div className='bg-black rounded-2xl mx-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center '>
                    <h1 className='text-3xl text-white p-4'>How green tea helps your body and mind?</h1>
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-100 text-xs w-60 lg:w-96 p-4'>Research shows that the combination of caffeine and improves brain function by strengthening working memory and attention, and reducing anxiety</p>
                        <Link to='/blog'><BsFillArrowRightCircleFill className='text-4xl text-secondary mx-10'></BsFillArrowRightCircleFill></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;