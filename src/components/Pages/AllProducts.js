import React from 'react';
import useProducts from '../../hooks/useProducts';
import ShowAllProduct from './ShowAllProduct';

const AllProducts = () => {

    const [products] = useProducts();

    return (
        <div className='m-2'>
            <h1 className='text-2xl font-bold m-2'>All Products</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Min Order</th>
                            <th>Action</th>
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