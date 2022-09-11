import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4MvZIoJ0sYbcfvZu5uUnTyYuH1n4RCFNm4gh7CWnksmojbwF63yyniPFkBTJIJyh4gnEgnn7qLE1Gg9G0XyuQ2008FsGmPQ4');

const Payment = () => {
    const { id } = useParams();
    const url = `https://immense-savannah-21225.herokuapp.com/purchase/${id}`;
    const { data: payment, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='m-4'>
            <div className="card w-50 max-w-md bg-secondary text-primary-content rounded-md mx-auto">
                <div className="card-body">
                    <p>Hello {payment?.user}</p>
                    <h2 className="card-title">Make payment for <span className='text-info'>{payment.name}</span> </h2>
                    <p>Thank you for shopping</p>
                    <p>Please Pay <span className='text-info'> ${payment.price}</span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md border rounded-md bg-base-100 mt-4 mx-auto">
                <div className="card-body ">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payment={payment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;