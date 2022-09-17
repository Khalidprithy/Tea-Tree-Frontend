import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ShowProduct from './ShowProduct';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Products = () => {
    const [products] = useProducts();
    const navigate = useNavigate();

    const handleAllProduct = () => {
        navigate('/products')
    }
    return (
        <div className='bg-white pt-10'>
            <div className='flex items-center justify-between border rounded-2xl mx-6 outline outline-secondary mb-6'>
                <h1 className='text-2xl md:text-4xl text-black text-center font-semibold p-6'>Our Products</h1>
                <div className="tooltip tooltip-secondary" data-tip="View All">
                    <button
                        onClick={handleAllProduct}
                    ><BsFillArrowRightCircleFill className='text-4xl text-secondary mx-10'></BsFillArrowRightCircleFill></button>
                </div>
            </div>
            <div id='product' className='grid grid-cols-1 md:grid-cols-4 gap-4 mx-6'>
                {
                    products.slice(0, 8).map(product => <ShowProduct
                        key={product._id}
                        product={product}
                    ></ShowProduct>)
                }
            </div>
        </div>
    );
};

export default Products;