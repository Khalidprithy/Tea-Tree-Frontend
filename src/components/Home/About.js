import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../images/about-img.jpg'

const About = () => {

    return (
        <div className='bg-white'>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-6'>
                <div className='flex items-center justify-center'>
                    <img className='w-10/12 md:w-8/12 lg:w-10/12 xl:w-8/12 rounded-xl' src={aboutImg} alt="" />
                </div>
                <div className='flex flex-col justify-center p-10 mx-auto'>
                    <h3 className='text-3xl xl:text-5xl font-semibold text-neutral'>About us</h3>
                    <h3 className='text-lg text-green-500 font-medium'>Discover the Magic of Tea with TeaTree!</h3>
                    <p className='mt-2 text-sm md:text-xl xl:text-xl text-gray-700'>We are a passionate tea manufacturer dedicated to producing high-quality green teas that are not only delicious, but also good for your health. Our teas are handpicked from the finest tea gardens, and we take great care in ensuring that only the best leaves are selected for our blends.
                        <br />
                        <br />
                        At TeaTree, we believe that tea is more than just a drink. It's a way of life. Our goal is to bring the joys of tea to as many people as possible, and to help promote a healthier, more balanced lifestyle. We believe that tea should be enjoyed by everyone, regardless of age or background, and we are committed to making our teas accessible and affordable to all.
                        <br />
                        <br />
                        We hope that you will join us on our tea journey and discover the many benefits of green tea for yourself. Whether you're a seasoned tea drinker or just starting out, we believe that you will find something to love in our products. So why wait? Start sipping and start feeling the difference today!</p>
                    <div className='flex justify-start gap-4 mt-4'>
                        <Link to='/about' className='btn btn-md btn-outline rounded-md'>read more</Link>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h4 className='text-3xl text-center font-bold'>Business States</h4>
                <section class="bg-white dark:bg-gray-900">
                    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white">
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Product sold</dd>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl md:text-4xl font-extrabold">1K+</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Stores Worldwide</dd>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl md:text-4xl font-extrabold">40+</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Business Partnership</dd>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl md:text-4xl font-extrabold">22+</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Countries</dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;