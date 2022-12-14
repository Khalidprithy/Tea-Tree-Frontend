import React from 'react';
import { SiMicrodotblog } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Summery = () => {
    return (
        <div className='py-10 bg-white'>
            <div className='bg-black rounded-2xl mx-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center '>
                    <h1 className='text-3xl lg:text-4xl text-white p-4 xl:p-8'>Get in touch with help and support team.</h1>
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-100 text-xs lg:text-base w-60 lg:w-6/12 p-4'>We have a dedicated team for help and support. You can contact us for any business queries and meeting. We are online 24/7 to help you. Thanks</p>
                        <Link className='tooltip  tooltip-secondary' data-tip='Contact Us' to='/about'><SiMicrodotblog className='text-4xl xl:text-5xl text-accent hover:text-secondary mx-10'></SiMicrodotblog></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summery;