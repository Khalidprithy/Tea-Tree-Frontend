import React from 'react';
import aboutImg from '../../images/about-img.jpg'

const About = () => {
    return (
        <div className='bg-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-6'>
                <div className='flex items-center justify-center'>
                    <img className='w-72 rounded-xl ' src={aboutImg} alt="" />
                </div>
                <div className='flex flex-col justify-center p-10 mx-auto'>
                    <h1 className='text-5xl font-semibold text-neutral'>About us</h1>
                    <p className='mt-2 text-sm text-gray-500'>A benefit corporation still has a profit-making goal, but it also has a broader public benefit purpose: to make a material positive impact on society and the environment. PBCs must work to achieve this purpose and therefore have the flexibility to make decisions that balance profits with social causes and environmental responsibility. Our mission of doing right by the environment and people have been in our DNA since inception, and now we have made it official with the conversion to PBC.</p>
                    <div className='flex justify-start gap-4 mt-4'>
                        <button className='btn btn-md btn-outline rounded-sm'>read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;