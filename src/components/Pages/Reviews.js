import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Review from './Review';
import { FaHandPointRight } from 'react-icons/fa';


const Reviews = () => {
    const [reviews] = useReview();


    return (
        <div className='bg-white'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 pt-6'>
                    <div className='flex items-center justify-center'>
                        <img className='w-72 rounded-xl ' src='https://img.freepik.com/premium-vector/we-want-your-feedback-speech-bubbles-white_180786-7.jpg?w=2000' alt="" />
                    </div>
                    <div className='flex flex-col justify-center p-10 mx-auto'>
                        <h1 className='text-4xl font-semibold text-neutral'>Feel free to drop us your feedback</h1>
                        <p className='mt-2 text-sm text-gray-500'>Customer feedback is important because it serves as a guiding resource for the growth of your company. Within the good and the bad, you can find gems that make it easier to adjust and adapt the customer experience over time. In short, feedback is the way to keep your community at the heart of everything you do.The best way to get a candid response from a customer is to simply ask for one. Since email enables you to send a one-to-one request, you can ask for more personal feedback than in a survey</p>
                        <div className='flex justify-start items-center gap-4 mt-4'>
                            <h1 className='font-semibold flex items-center gap-2'>Review a product <FaHandPointRight className='text-blue-500 text-xl'></FaHandPointRight></h1>
                            <Link to='/products' className='btn btn-sm btn-outline rounded-sm'>Review</Link>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-2xl font-bold text-center text-secondary py-6'>What Our Customer Says</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-11/12 md:w-10/12 pb-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;