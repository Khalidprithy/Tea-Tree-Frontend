import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';


const SignUp = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [agree, setAgree] = useState(false);


    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [token] = useToken(user || userG);

    const onSubmit = async data => {
        createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
    }

    let errorMessage;

    if (token) {
        navigate(from, { replace: true });
    }

    if (error || errorG || updateError) {
        errorMessage = <p className='text-orange-500'>{error?.message || errorG?.message || updateError?.message}</p>
    }

    if (loading || loadingG || updating) {
        <Loading></Loading>
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col md:flex-row">

                <div>
                    <div className="card w-80 border-2 rounded-md border-secondary">
                        <div className="card-body">
                            <h2 className="text-2xl m-2 font-bold text-center text-secondary">Sign Up</h2>
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => signInWithGoogle()}
                                    className="btn btn-outline btn-secondary rounded-sm w-full"><FcGoogle className='mr-2'></FcGoogle>Google</button>
                                {/* <button
                                    onClick={() => signInWithGoogle()}
                                    className="btn border-white hover:border-white text-black hover:text-white bg-white hover:bg-accent"><GrFacebook className='mr-2 text-blue-500'></GrFacebook>Facebook</button> */}
                            </div>

                            <div className="divider text-neutral">OR</div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered w-full max-w-xs focus:outline-secondary"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Please Enter You Name'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-orange-500">{errors.name.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full max-w-xs focus:outline-secondary"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Please Enter You Email'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Enter a valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-orange-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-orange-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        type="password"
                                        placeholder="Your Password"
                                        className="input input-bordered w-full max-w-xs focus:outline-secondary"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Please Enter You Password'
                                            },
                                            pattern: {
                                                value: /(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                                                message: 'Password must contain one special character and one number'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-error">{errors.password.message}</span>}

                                    </label>
                                </div>
                                {errorMessage}
                                <div className='flex items-center'>
                                    <input
                                        onClick={() => setAgree(!agree)}
                                        type="checkbox" className='checkbox checkbox-sm checkbox-secondary' name="terms" id="" />
                                    <label className='ml-1 text-neutral' htmlFor="terms">I agree with the terms of use </label>
                                </div>
                                <input
                                    disabled={!agree}
                                    className='btn btn-secondary btn-outline rounded-sm btn-md w-full mt-2' type="submit" value='Sign Up' />
                            </form>
                            <div className='flex items-center'>
                                <p className='text-neutral'>Already have an account?<Link className='btn btn-link text-xs text-secondary' to='/login'>Login</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SignUp;