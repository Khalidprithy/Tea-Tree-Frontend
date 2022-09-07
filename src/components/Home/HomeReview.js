import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewCard from './ReviewCard';

const HomeReview = () => {
    const [reviews] = useReview();
    return (
        <div className='bg-white'>
            <h1 className='text-2xl font-bold text-center py-6'>What Our Customer Says About Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-4 pb-10'>
                {
                    reviews.slice(0, 3).map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default HomeReview;