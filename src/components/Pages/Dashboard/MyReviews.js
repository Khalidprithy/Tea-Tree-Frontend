import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';

const MyReviews = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const { _id, category, name, brand, description, photo } = product;

    const handleReview = event => {
        event.preventDefault();

        const review = {
            productId: _id,
            category,
            name,
            brand,
            description,
            photo,
            user: event.target.userName.value,
            email: event.target.email.value,
            review: event.target.review.value,
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.success('Review added Successful')
                }
                else {

                }
                navigate('/')
            })
    }

    return (
        <div className='pt-10'>
            <h1 className='text-xl font-semibold text-center pb-4'>Please give us your valuable feedback of <span className='text-secondary'>{product.name}</span></h1>
            <div className='flex justify-center items-center min-h-screen'>
                <form onSubmit={handleReview}>
                    <div className="card md:card-side max-w-lg bg-base-100 shadow-xl">
                        <figure><img className='w-64' src={photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{description}</p>
                            <p>Price: ${product.price}</p>
                            <input type="text" name='userName' value={user?.displayName} className="input input-sm input-bordered mb-2 w-full max-w-lg" readOnly />
                            <input type="email" name='email' value={user?.email} className="input input-sm input-bordered mb-2 w-full max-w-lg" readOnly />
                            <textarea type="text" name='review' placeholder='Enter your review' className="input outline focus:outline-secondary mb-2 w-full max-w-lg" />
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" checked />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                            <input type="submit" value='Add Review' className='btn btn-outline rounded-sm w-full max-w-lg' />
                        </div>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default MyReviews;