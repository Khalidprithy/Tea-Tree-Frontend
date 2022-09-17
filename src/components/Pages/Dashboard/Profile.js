import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Profile = () => {

    const [user] = useAuthState(auth);

    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-secondary p-2'>Your Profile</h1>
            <div className='m-2 grid grid-cols-1 md:grid-cols-3'>
                <div className='h-full'>
                    <div className="card h-full">
                        <figure className="px-10 pt-10">
                            <img className="mask mask-squircle w-32" src={user?.photoURL} alt=" Shoes" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{user?.displayName}</h2>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h1 className='text-xl m-2 font-semibold text-center'>Update your profile</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' type="text" placeholder="Your name" />
                            <input type="text" placeholder="Your email" className='mb-3 p-2 rounded-md border-2 hover:border-secondary' />
                            <input type="text" placeholder="Phone number" className='mb-3 p-2 rounded-md border-2 hover:border-secondary' />
                            <input type="text" placeholder="Company" className='mb-3 p-2 rounded-md border-2 hover:border-secondary' />
                            <textarea className='mb-3 p-2 rounded-md border-2 hover:border-secondary h-20' placeholder='Bio' name="bio" id="bio" cols="30" rows="10"></textarea>
                            <button className='btn btn-secondary'>Update</button>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className="card h-full">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/account-and-profile-management-3148754-2624931.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;