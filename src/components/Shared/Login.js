import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';
import toast from 'react-hot-toast';
import { FaHome } from 'react-icons/fa';


const Login = () => {
    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || userG)

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data);
    }
    let errorMessage;

    if (loading || loadingG || sending) {
        return <Loading></Loading>
    }

    if (error || errorG || resetError) {
        errorMessage = <p className='text-error'>{error?.message || errorG?.message}</p>
    }

    const handleReset = async (data) => {
        const email = data.email;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email');
        }
        else {
            alert('please enter your email address');
        }
    }

    return (
        <div className="hero min-h-screen bg-gradient-to-r from-gray-400 via-green-600 to-gray-400">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div>
                    <div className="card w-80 lg:w-[500px] bg-white border-2 rounded-md border-secondary">
                        <div className="card-body">
                            <Link to='/'>
                                <FaHome className='text-5xl text-green-600 border-2 border-green-700 rounded-full p-2 hover:text-white hover:bg-green-500 transition ease-in duration-300' />
                            </Link>
                            <h2 className="text-2xl m-2 font-bold text-center text-secondary">Login</h2>
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => signInWithGoogle()}
                                    className="btn btn-outline btn-secondary rounded-md  w-full"><FcGoogle className='mr-2'></FcGoogle>Google</button>
                            </div>
                            <div className="divider text-neutral">OR</div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full focus:outline-secondary"
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
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full">
                                    <input
                                        type="password"
                                        placeholder="Your Password"
                                        className="input input-bordered w-full focus:outline-secondary"
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

                                <input className='btn btn-secondary btn-outline rounded-md btn-md w-full test-white' type="submit" value='Login' />
                                <div className='flex items-center justify-between'>
                                    <p className='text-start'>
                                        <button
                                            onClick={handleReset}
                                            className='btn btn-link text-xs text-neutral p-0 m-0'>Forgot password?</button>
                                    </p>
                                </div>
                            </form>
                            <div className='flex justify-center items-center'>
                                <p className='text-neutral text-sm lg:text-base'>Doesn't have an account?<Link className='btn btn-link text-xs lg:text-base text-secondary' to='/signup'>Sign Up</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;