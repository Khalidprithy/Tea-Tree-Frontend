import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import auth from '../../firebase.init';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Purchase = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `https://teatree-server.onrender.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const { _id, category, name, price, brand, description, photo, minOrder } = product;

    const handlePurchase = event => {
        event.preventDefault();
        const orderQuantity = event.target.orderQuantity.value;
        const quantity = orderQuantity;

        const purchase = {
            productId: _id,
            category,
            name,
            price,
            brand,
            description,
            photo,
            quantity,
            user: event.target.userName.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
        }


        fetch('https://teatree-server.onrender.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.success('Purchase Successful', {
                        icon: '🥰',
                    })
                }
                else {
                    toast.error('Something wrong. Try Again', {
                        icon: '💔',
                    })
                }
            })
    }

    const handleGoBack = () => {
        navigate('/products')
    }

    return (
        <div className='bg-white pt-4'>
            <div className='flex items-center justify-between border rounded-2xl mx-6 border-secondary mb-6'>
                <div className="tooltip tooltip-secondary" data-tip="Go Back">
                    <button
                        onClick={handleGoBack}
                    ><BsFillArrowLeftCircleFill className='text-4xl text-secondary mx-10'></BsFillArrowLeftCircleFill></button>
                </div>
                <h1 className='text-xl md:text-3xl text-black text-center font-semibold p-6'>Purchase Information</h1>
            </div>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col md:flex-row p-0 pb-2">
                        <img className='w-64 md:w-72 lg:w-80 rounded-lg hover:scale-105 ease-in-out duration-500' src={product.photo} alt='' />
                        <div className='card-compact border rounded-lg p-3'>
                            <form onSubmit={handlePurchase}>
                                <h1 className="text-3xl font-bold">{product.name}</h1>
                                <div className='flex flex-col'>
                                    <span className='text-xl w-full font-semibold max-w-xs'>{product.description}</span>
                                    <p><span className='font-bold'>Brand: </span>{product.brand}</p>
                                    <p><span className='font-bold'>Category:</span> {product.category}</p>
                                    <p><span className='font-bold'>Price:</span> {product.price}</p>
                                    <p><span className='font-bold'>Quantity:</span> {product.quantity}</p>
                                    <p><span className='font-bold'>Minimum Order:</span> {product.minOrder}</p>
                                    <h4 className='text-xl font-bold text-center'>Purchase Information</h4>
                                </div>
                                <div className='flex flex-col md:flex-row items-center justify-around gap-2'>
                                    <div className='flex flex-col'>
                                        <label className='text-left ml-1 mb-2 font-semibold'>User Name</label>
                                        <input type="text" name='userName' value={user?.displayName} className="input input-sm input-bordered mb-2 w-full max-w-lg" readOnly />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-left ml-1 mb-2 font-semibold'>User Email</label>
                                        <input type="email" name='email' value={user?.email} className="input input-sm input-bordered mb-2 w-full max-w-lg" readOnly />
                                    </div>
                                </div>
                                <div className='flex items-center justify-between gap-2'>
                                    <input
                                        type="number" name="orderQuantity" placeholder='Quantity'
                                        min={product.minOrder} max={product.quantity} className="mb-1 p-2 rounded-md border-2 hover:border-secondary w-24" required />
                                    <input type="text" name='phone' placeholder='Phone number' className="mb-1 p-2 rounded-md border-2 hover:border-secondary w-48 md:w-56" />
                                </div>
                                <input type="text" name='address' placeholder='Enter your address' className="mb-3 p-2 rounded-md border-2 hover:border-secondary w-full" />
                                <input type="submit" value='Purchase' className='btn btn-md btn-outline btn-secondary w-full rounded-sm' />
                            </form>
                            <Toaster />
                        </div>
                    </div>
                </div>
            </div >
        </div >


    );
};

export default Purchase;