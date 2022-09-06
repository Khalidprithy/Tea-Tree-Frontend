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
        const url = `http://localhost:5000/products/${id}`;
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


        fetch('http://localhost:5000/purchase', {
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
                    toast.success('Purchase Successful')
                }
                else {

                }
            })
    }

    const handleGoBack = () => {
        navigate('/products')
    }

    return (
        <div>
            <div className='flex items-center justify-between border rounded-2xl mx-6 outline outline-secondary mb-6 mt-4'>
                <div className="tooltip tooltip-secondary" data-tip="Go Back">
                    <button
                        onClick={handleGoBack}
                    ><BsFillArrowLeftCircleFill className='text-4xl text-secondary mx-10'></BsFillArrowLeftCircleFill></button>
                </div>
                <h1 className='text-xl md:text-3xl text-black text-center font-semibold p-6'>Purchase Information</h1>
            </div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col md:flex-row">
                        <img className='w-64 md:w-72 lg:w-96 rounded-lg' src={product.photo} alt='' />
                        <div className='card-body'>
                            <form onSubmit={handlePurchase}>
                                <h1 className="text-2xl font-bold">{product.name}</h1>
                                <ul>
                                    <input type="text" name='name' value={product.description} className="input text-xl w-full max-w-xs" readOnly />
                                    <li><span className='font-bold'>Brand: </span>{product.brand}</li>
                                    <li><span className='font-bold'>Category:</span> {product.category}</li>
                                    <li><span className='font-bold'>Price:</span> {product.price}</li>
                                    <li><span className='font-bold'>Quantity:</span> {product.quantity}</li>
                                    <li><span className='font-bold'>Minimum Order:</span> {product.minOrder}</li>
                                    <h4 className='text-xl font-bold text-center'>Purchase Information</h4>

                                </ul>
                                <p className='text-sm font-bold m-1 '>Enter order quantity</p>
                                <input
                                    type="number" name="orderQuantity"
                                    min={product.minOrder} max={product.quantity} className="mb-3 p-2 rounded-md border-2 hover:border-secondary" required />
                                <div className='flex flex-col md:flex-row items-center justify-around '>
                                    <div className='flex flex-col'>
                                        <label className='text-left ml-1 mb-2 font-semibold'>User Name</label>
                                        <input type="text" name='userName' value={user?.displayName} className="input input-sm input-bordered mb-2 w-full max-w-lg" readOnly />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-left ml-1 mb-2 font-semibold'>User Email</label>
                                        <input type="email" name='email' value={user?.email} className="input input-sm input-bordered mb-2 w-full max-w-lg" readOnly />
                                    </div>
                                </div>
                                <input type="text" name='address' placeholder='Enter your address' className="mb-3 p-2 rounded-md border-2 hover:border-secondary w-full" />
                                <input type="text" name='phone' placeholder='Enter your phone number' className="mb-3 p-2 rounded-md border-2 hover:border-secondary w-full" />
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