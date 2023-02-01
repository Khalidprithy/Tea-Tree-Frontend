import React from 'react';
import bannerImg from '../../images/banner-img.png'
import { SiGooglechat } from 'react-icons/si';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-6'>
                <div className='flex flex-col justify-center p-10 mx-auto w-full lg:w-10/12 order-2 md:order-1'>
                    <h2 className='text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-neutral'>TeaTree - <br /> The Finest Teas</h2>
                    <h4 className='text-base lg:text-lg font-medium text-green-500'>Experience the richness of nature in every sip</h4>
                    <p className='mt-2 text-sm md:text-base lg:text-xl text-gray-700'> At TeaTree, we hand-pick only the finest tea leaves and blend them with natural ingredients to create unique and delicious teas. From classic black teas to herbal blends, we have something for every tea lover.</p>
                    <div className='flex justify-start gap-4 mt-4'>
                        <Link to='/products' className='btn btn-md btn-outline rounded-md'>Learn More</Link>
                        <a
                            href='#product'
                            className='btn btn-md btn-secondary rounded-md'>Shop Now</a>
                    </div>
                    <div className='flex items-center mt-6'>
                        <button><SiGooglechat className='text-3xl md:text-5xl text-secondary m-2'></SiGooglechat></button>
                        <p className='text-xs md:text-base'>Get quick and helpful support with our chat option. Chat with us anytime for all your tea-related questions and concerns.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center order-1'>
                    <img className='w-48 md:w-56 lg:w-72 xl:w-96' src={bannerImg} alt="" />
                </div>
            </div>
            <div className='bg-black rounded-xl mx-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center '>
                    <h1 className='text-2xl md:text-4xl xl:text-5xl text-white p-4 lg:p-8'>How green tea helps your body and mind?</h1>
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-50 text-sm md:text-base xl:text-base w-60 md:w-10/12 lg:w-8/12 p-4'>Green tea improves metabolism, brain function, reduces stress and lowers risk of chronic diseases. It's a healthy drink for both body and mind.</p>
                        <Link to='/blog'><BsFillArrowRightCircleFill className='text-4xl lg:text-6xl text-gray-50 hover:text-secondary mx-10'></BsFillArrowRightCircleFill></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;