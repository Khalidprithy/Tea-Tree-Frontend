import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <div className="relative">
                <img className='w-full' src="https://blog.davidstea.com/en/wp-content/uploads/2015/06/016-GardenToCup_hero.png" alt="" />
                <div className='absolute top-0 md:top-2 right-1/2 p-1 md:p-10 bg-gray-50/25 m-4 rounded-xl'>
                    <div className=''>
                        <h1 className='text-xl md:text-3xl font-bold p-1'>Taste Something <span className='text-secondary'>Organic</span> </h1>
                        <p className='text-sm hidden md:block'>We are a Denver-based, Bangladeshi-grown organic tea company working to create a regenerative and self-sustaining community. We bring the best-tasting, organic tea straight to your cup</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-2xl text-center font-semibold mt-4'>Company Summary and Accomplishment</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-1 m-4'>
                    <div className="card w-72 bg-base-100 rounded-xl border mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://web.ineons.com/sites/default/files/storage/product_images/tra_nong.jpg" alt="Shoes" className="mask mask-hexagon-2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Sales</h2>
                            <p className='text-sm'>Trust and loyalty are the main reasons why a customer would choose to recommend your company to a friend or family member or write a great review of your product or service online </p>
                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 rounded-xl border mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://images.iphonephotographyschool.com/23080/1120/food.jpg" alt="Shoes" className="mask mask-hexagon-2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Help & Support</h2>
                            <p className='text-sm'>20 + employees for customer support and help. You can message a person or group in Google Chat the same way you do in classic</p>
                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 rounded-xl border mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/01/Massala-Chai-1741f01.jpg" alt="Shoes" className="mask mask-hexagon-2 w-52" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Media & Press</h2>
                            <p className='text-sm'>Media helps to increase knowledge about various subjects. Mass production: Media acts as a great tool in promoting mass consumer products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;