import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowAllProduct = ({ product }) => {

    const navigate = useNavigate();
    const { _id } = product;

    const handlePurchase = id => {
        navigate(`/products/${id}`)
    }
    const handleReview = id => {
        navigate(`/myreview/${id}`)
    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 lg:w-20 h-12 lg:h-20">
                            <img src={product.photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-base lg:text-3xl">{product.name}</div>
                        <div className="text-sm lg:text-xl opacity-50">{product.category}</div>
                    </div>
                </div>
            </td>
            <td>
                <p className='text-base lg:text-xl'>
                    {product.description.slice(0, 60)}
                </p>
            </td>
            <td className='text-base lg:text-2xl'>{product.quantity}</td>
            <td className='text-base lg:text-2xl'> ${product.price}</td>
            <td><p className='text-base lg:text-2xl'>{product.minOrder}</p></td>
            <th>
                <button
                    onClick={() => handlePurchase(_id)}
                    className="btn btn-outline btn-sm lg:btn-lg btn-secondary rounded-lg">Order</button>
                <button
                    onClick={() => handleReview(_id)}
                    className="btn btn-sm lg:btn-lg btn-outline rounded-lg ml-1">Review</button>
            </th>
        </tr>
    );
};

export default ShowAllProduct;