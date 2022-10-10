import React from 'react';
import bannerImg from '../../images/banner-img.png'
import { SiGooglechat } from 'react-icons/si';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-6'>
                <div className='flex flex-col justify-center p-10 mx-auto w-full lg:w-8/12'>
                    <h1 className='text-5xl md:text-6xl font-semibold text-neutral'>Organic Green Tea</h1>
                    <p className='mt-2 text-sm md:text-xl lg:text-xl text-gray-500'>The steaming process creates a unique flavor profile that can be described as sweet, vegetal or seaweed-like. The Japanese style of green tea is characterized by steaming</p>
                    <div className='flex justify-start gap-4 mt-4'>
                        <Link to='/products' className='btn btn-md md:btn-lg btn-outline rounded-sm'>Explore more</Link>
                        <a
                            href='#product'
                            className='btn md:btn-lg  btn-secondary rounded-sm'>Buy Now</a>
                    </div>
                    <div className='flex items-center mt-6'>
                        <button><SiGooglechat className='text-3xl md:text-5xl text-secondary m-2'></SiGooglechat></button>
                        <p className='text-xs md:text-base'>Chat with our business manager. We are always open for any kind of business discussion</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img className='w-48 md:w-56 lg:w-64 xl:w-96' src={bannerImg} alt="" />
                </div>
            </div>
            <div className='bg-black rounded-2xl mx-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center '>
                    <h1 className='text-3xl md:text-4xl xl:text-5xl text-white p-4 lg:p-8'>How green tea helps your body and mind?</h1>
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-100 text-xs md:text-base xl:text-base w-60 lg:w-6/12 p-4'>Research shows that the combination of caffeine and improves brain function by strengthening working memory and attention, and reducing anxiety</p>
                        <Link to='/blog'><BsFillArrowRightCircleFill className='text-4xl lg:text-6xl text-accent hover:text-secondary mx-10'></BsFillArrowRightCircleFill></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;