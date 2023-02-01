import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const EachReview = ({ review, refetch }) => {

    const handleDeleteReview = () => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://teatree-server.onrender.com/reviews/${review._id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(data => {
                    console.log(data)
                    refetch()
                })
        }
    }
    return (
        <div className='rounded shadow p-2 relative'>
            <div>
                <h4 className='font-semibold text-lg'>{review.user}</h4>
                <p className='font-medium'>{review.email}</p>
            </div>
            <div className='flex p-2 mt-4'>
                <img className='w-20' src={review.photo} alt="" />
                <div>
                    <h3>{review.name}</h3>
                    <h4>{review.review}</h4>
                </div>
            </div>
            <AiFillDelete
                onClick={handleDeleteReview}
                className='text-2xl text-red-500 hover:text-red-600 absolute right-4 top-4' />

        </div>
    );
};

export default EachReview;