import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <div className="relative">
                <img className=' w-full' src="https://blog.davidstea.com/en/wp-content/uploads/2015/06/016-GardenToCup_hero.png" alt="" />
                <div className='absolute top-1/4 right-1/2 p-10 bg-gray-50/25 m-4 rounded-xl'>
                    <div>
                        <h1 className='text-3xl font-bold'>About Us</h1>
                        <p className=''>We are a Denver-based, Bangladeshi-grown organic tea company working to create a regenerative and self-sustaining community. We bring the best-tasting, organic tea straight to your cup</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;