import React from 'react';
import toast from 'react-hot-toast';
import img0 from '../../images/products/img0.png'
import img1 from '../../images/products/img1.png'
import img2 from '../../images/products/img2.png'

const NewProduct = () => {


    const handleToast = () => {
        toast.success('Thank you for your response', {
            icon: '😍',
        })
    }

    return (
        <div className='bg-white pt-10'>
            <h1 className='text-2xl md:text-4xl text-black text-center font-semibold'>Coming Soon...</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-6 mt-6'>
                <div className="card card-side border rounded-md outline outline-1 hover:outline-secondary">
                    <figure><img className='w-40 p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300' src={img0} alt="Movie" /></figure>
                    <div className="flex flex-col justify-between">
                        <h2 className="card-title mt-6">Wild Berry</h2>
                        <p className='text-xs'>Our iced tea brew bags have been a Tea tree staple for years. We canned up our classic iced teas into a ready-to-drink iced tea brewed to perfection</p>
                        <div>
                            <p className='text-sm'><span className='font-bold'>Price: $</span>19.99</p>
                            <p className='text-sm'><span className='font-bold'>Min Order: </span>12</p>
                        </div>
                        <div className="card-actions items-end justify-between">
                            <button
                                onClick={handleToast}
                                className="btn btn-sm btn-outline rounded-sm btn-secondary m-2 w-1/2">Excited</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side border rounded-md outline outline-1 hover:outline-secondary">
                    <figure><img className='w-36 p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300' src={img1} alt="Movie" /></figure>
                    <div className="flex flex-col justify-between">
                        <h2 className="card-title mt-6">White Peach</h2>
                        <p className='text-xs'>We’ve captured summer in a glass with this thirst-quenching iced tea. Our signature black tea is flavored with the essence of ripe melon and hints of crisp cucumber for the ultimate refreshing sip</p>
                        <div>
                            <p className='text-sm'><span className='font-bold'>Price: $</span>19.99</p>
                            <p className='text-sm'><span className='font-bold'>Min Order: </span>12</p>
                        </div>
                        <div className="card-actions items-end justify-between">
                            <button
                                onClick={handleToast}
                                className="btn btn-sm btn-outline rounded-sm btn-secondary m-2 w-1/2">Excited</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side border rounded-md outline outline-1 hover:outline-secondary ">
                    <figure><img className='w-36 p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300' src={img2} alt="Movie" /></figure>
                    <div className="flex flex-col justify-between">
                        <h2 className="card-title mt-6">Easy Green</h2>
                        <p className='text-xs'>100% organic and certified Kosher tea, direct from our single garden in Bangladesh or other like-minded single garden</p>
                        <div>
                            <p className='text-sm'><span className='font-bold'>Price: $</span>19.99</p>
                            <p className='text-sm'><span className='font-bold'>Min Order: </span>12</p>
                        </div>
                        <div className="card-actions items-end justify-between">
                            <button
                                onClick={handleToast}
                                className="btn btn-sm btn-outline rounded-sm btn-secondary m-2 w-1/2">Excited</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;