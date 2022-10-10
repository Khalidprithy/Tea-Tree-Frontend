import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowProduct = ({ product }) => {

    const navigate = useNavigate();
    const { _id } = product;

    const handleOrder = id => {
        navigate(`/products/${id}`)
    }
    const handleReview = id => {
        navigate(`/myreview/${id}`)
    }

    return (
        <div className="card card-compact h-full bg-white outline-none hover:outline-secondary shadow-none hover:shadow-xl rounded-md py-2">
            <figure><img className='w-40 md:w-44 xl:w-52' src={product.photo} alt="Shoes" /></figure>
            <div className="flex flex-col items-center">
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold">{product.name}</h2>
                <p className='text-xs lg:text-xl p-1'>{product.description}</p>
                <div className='flex flex-row gap-2 text-xs p-1'>
                    <p className='text-base md:text-base'><span className='font-bold'>Price: $</span>{product.price}</p>
                    <p className='text-base md:text-base'><span className='font-bold'>Min Quantity: </span>{product.minOrder}</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <button
                        onClick={() => handleOrder(_id)}
                        className="btn btn-sm md:btn-md xl:btn-md rounded-lg btn-secondary btn-outline mt-2 md:mb-2">Order</button>
                    <button
                        onClick={() => handleReview(_id)}
                        className="btn btn-sm md:btn-md xl:btn-md rounded-lg btn-outline mt-2 md:mb-2">Review</button>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;