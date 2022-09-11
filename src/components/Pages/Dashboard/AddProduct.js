import { async } from '@firebase/util';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import auth from '../../../firebase.init';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AddProduct = () => {

    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '252bb439cd1e3bfb0cf4929db5f825ce';


    const onSubmit = async data => {
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        user: data.name,
                        email: data.email,
                        name: data.productName,
                        brand: data.brand,
                        description: data.description,
                        category: data.category,
                        price: parseInt(data.price),
                        quantity: parseInt(data.quantity),
                        minOrder: parseInt(data.minOrder),
                        date: data.date,
                        photo: img

                    }
                    fetch('https://immense-savannah-21225.herokuapp.com/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(added => {
                            if (added.insertedId) {
                                toast.success('Successfully added new product');
                                reset();
                            }
                            else {
                                toast.error('Failed to add product')
                            }
                        })
                }
                console.log('imgbb', result)
            })
    };

    return (

        <div className='bg-white'>
            <div className='flex items-center justify-between border rounded-2xl mx-6 outline outline-secondary mb-6'>
                <div className="tooltip tooltip-secondary" data-tip="Home">
                    <Link to='/'
                    ><AiOutlineHome className='text-4xl text-secondary mx-10'></AiOutlineHome></Link>
                </div>
                <h1 className='text-xl md:text-3xl text-black text-center font-semibold p-6'>Add New Product</h1>
            </div>
            <div className='flex gap-4 items-center justify-center bg-white'>

                <div className='hidden md:block'>
                    <img className='rounded-xl m-4' src="https://img.freepik.com/premium-vector/chinese-tea-plantation-colorful-landscape-mountains_329121-89.jpg" alt="" />
                </div>
                <div className='flex flex-col items-center p-6'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1'>
                            <div className='flex flex-col md:flex-row items-center justify-around '>
                                <div className='flex flex-col'>
                                    <label className='text-left ml-1 mb-2 font-semibold'>User Name</label>
                                    <input className='mb-3 p-2 rounded-md border' value={user?.displayName} {...register("name", { required: true })} readOnly />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-left ml-1 mb-2 font-semibold'>User Email</label>
                                    <input className='mb-3 p-2 rounded-md border' value={user?.email} {...register("email", { required: true })} readOnly />
                                </div>
                            </div>

                            <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Product Name' {...register("productName", { required: true, maxLength: 20 })} required />

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Price' type="number" {...register("price")} required />
                                <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Brand' {...register("brand")} required />
                                <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Quantity' type="number" {...register("quantity", { min: 1, max: 1000 })} required />
                                <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Minimum Order' type="number" {...register("minOrder", { min: 1, max: 1000 })} required />
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                                <div className="mb-3 p-2 rounded-md border-2 hover:border-secondary">
                                    <select className="select select-sm w-full border-secondary" {...register("category")}>
                                        <option selected>Organic</option>
                                        <option>Green Tea</option>
                                        <option>Black Tea</option>
                                        <option>White Tea</option>
                                    </select>
                                </div>
                                <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Date' type="date" {...register("date")} />
                                <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' type='file' placeholder='Photo URL' {...register("photo", { required: true })} />
                            </div>
                            <textarea className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Description' {...register("description")} />

                            <input className='btn btn-md btn-outline rounded-sm' type="submit" value='Add Product' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;