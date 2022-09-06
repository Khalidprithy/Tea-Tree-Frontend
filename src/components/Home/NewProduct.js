import React from 'react';
import img0 from '../../images/products/img0.png'
import img1 from '../../images/products/img1.png'
import img2 from '../../images/products/img2.png'

const NewProduct = () => {
    return (
        <div className='bg-white pt-10'>
            <h1 className='text-2xl md:text-4xl text-black text-center font-semibold'>Exclusive Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-6 mt-6'>
                <div className="card card-side border rounded-md">
                    <figure><img className='w-40 p-2' src={img0} alt="Movie" /></figure>
                    <div className="flex flex-col justify-between">
                        <h2 className="card-title mt-6">Wild Berry</h2>
                        <p className='text-sm'>Organic ice tea</p>
                        <div>
                            <p className='text-sm'><span className='font-bold'>Price: $</span>19.99</p>
                            <p className='text-sm'><span className='font-bold'>Min Order: </span>12</p>
                        </div>
                        <div className="card-actions items-end justify-between">
                            <button className="btn btn-sm btn-outline rounded-sm btn-secondary m-2 w-full">Order</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side border rounded-md">
                    <figure><img className='w-36 p-2' src={img1} alt="Movie" /></figure>
                    <div className="flex flex-col justify-between">
                        <h2 className="card-title mt-6">White Peach</h2>
                        <p className='text-sm'>Organic ice tea</p>
                        <div>
                            <p className='text-sm'><span className='font-bold'>Price: $</span>19.99</p>
                            <p className='text-sm'><span className='font-bold'>Min Order: </span>12</p>
                        </div>
                        <div className="card-actions items-end justify-between">
                            <button className="btn btn-sm btn-outline rounded-sm btn-secondary m-2 w-full">Order</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side border rounded-md">
                    <figure><img className='w-36 p-2' src={img2} alt="Movie" /></figure>
                    <div className="flex flex-col justify-between">
                        <h2 className="card-title mt-6">Easy Green</h2>
                        <p className='text-sm'>Organic ice tea</p>
                        <div>
                            <p className='text-sm'><span className='font-bold'>Price: $</span>19.99</p>
                            <p className='text-sm'><span className='font-bold'>Min Order: </span>12</p>
                        </div>
                        <div className="card-actions items-end justify-between">
                            <button className="btn btn-sm btn-outline rounded-sm btn-secondary m-2 w-full">Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;