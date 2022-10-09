import React from 'react';
import useProducts from '../../hooks/useProducts';
import ShowAllProduct from './ShowAllProduct';

const AllProducts = () => {

    const [products] = useProducts();

    return (
        <div className=' bg-white'>
            <h1 className='text-2xl lg:text-5xl font-bold p-2 text-center lg:p-10'>All Products Details</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-11/12 mx-auto mb-10">
                    <thead>
                        <tr>
                            <th className='text-base lg:text-2xl'>Name</th>
                            <th className='text-base lg:text-2xl'>Description</th>
                            <th className='text-base lg:text-2xl'>Quantity</th>
                            <th className='text-base lg:text-2xl'>Price</th>
                            <th className='text-base lg:text-2xl'>Min Order</th>
                            <th className='text-base lg:text-2xl'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <ShowAllProduct
                                key={product.id}
                                product={product}
                            ></ShowAllProduct>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;