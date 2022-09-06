import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Summery = () => {
    return (
        <div>
            <div className='bg-black rounded-2xl mx-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center '>
                    <h1 className='text-3xl text-white p-4'>How green tea helps your body and mind?</h1>
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-100 text-xs w-60 p-4'>Research shows that the combination of caffeine and improves brain function by strengthening working memory and attention, and reducing anxiety</p>
                        <button><BsFillArrowRightCircleFill className='text-4xl text-secondary mx-10'></BsFillArrowRightCircleFill></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summery;