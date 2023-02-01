import React from 'react';
import useReview from '../../../hooks/useReview';
import EachReview from './EachReview';

const ManageReviews = () => {
    const [reviews, refetch] = useReview();

    return (
        <div>
            <h1 className='text-2xl font-bold text-center text-secondary py-6'>Manage all reviews</h1>
            <div className='grid grid-cols-1 gap-4 p-5 px-10'>
                {
                    reviews?.map(review => <EachReview
                        key={review._id}
                        review={review}
                        refetch={refetch}
                    >
                    </EachReview>)
                }
            </div>

        </div>
    );
};

export default ManageReviews;