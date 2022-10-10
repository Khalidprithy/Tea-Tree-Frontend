import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="card card-compact bg-white rounded-lg outline outline-1 hover:outline-secondary transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
            <div className='flex items-center gap-2 m-1'>
                <img className='w-14 xl:w-20 rounded-full p-1' src={review.userPhoto ? review.userPhoto : 'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'} alt="" />
                <div>
                    <h2 className="font-bold text-base xl:text-2xl">{review.user}</h2>
                    <p className='text-sm lg:text-base font-light'>{review.email}</p>
                </div>
            </div>
            <div className="flex justify-start p-2">
                <img className='w-20' src={review.photo} alt="" />
                <div className='flex flex-col'>
                    <p className='font-bold text-base xl:text-2xl'>{review.name}</p>
                    <p className='text-xs xl:text-xl'>{review.review}</p>
                </div>
            </div>
            <div className="card-actions justify-end p-2">
                <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;