import React from 'react';
import useReview from '../../hooks/useReview';
import Review from './Review';

const Reviews = () => {
    const [reviews] = useReview();
    return (
        <div className='bg-white'>
            <h1 className='text-2xl font-bold text-center text-secondary py-6'>What Our Customer Says About Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4'>
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