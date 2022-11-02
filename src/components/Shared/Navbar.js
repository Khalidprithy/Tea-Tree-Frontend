import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import logo1 from '../../images/Logo1.png'
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const handleSignOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
        // .then(() => {
        //     setUser({})
        // })
        // .catch(error => {
        //     setUser({});
        // })
    }

    const menuItems = <>
        <li className='font-semibold text-neutral text-xl md:text-2xl lg:text-3xl'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-neutral text-xl md:text-2xl lg:text-3xl'><Link to='/products'>Products</Link></li>
        <li className='font-semibold text-neutral text-xl md:text-2xl lg:text-3xl'><Link to='/review'>Review</Link></li>
        <li className='font-semibold text-neutral text-xl md:text-2xl lg:text-3xl'><Link to='/about'>About</Link></li>
    </>

    return (
        <div className='bg-white pb-6'>
            <div className="navbar bg-white">
                <div className="navbar-start flex-1">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost md:hidden lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-48">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="p-2 ml-2 lg:ml-6 normal-case text-xl text-secondary"><img className='w-32 md:w-44 lg:w-56' src={logo1} alt="" /></Link>
                </div>
                <div className="navbar-center hidden md:flex lg:flex-auto">
                    <ul className="menu menu-horizontal p-0 md:pr-4">
                        {menuItems}
                    </ul>
                </div>
                <div className="flex-none">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="rounded-full w-24">
                                        {
                                            user.photoURL ?
                                                <img src={user?.photoURL} alt='' />
                                                :
                                                <img src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg" alt='' />
                                        }
                                    </div>
                                </label>
                                <ul tabIndex="0" className="menu menu-normal dropdown-content mt-3 p-2 lg:p-4 shadow bg-secondary rounded-box w-52 lg:w-64">
                                    <li>
                                        <Link to='/profile' className="justify-between text-white">
                                            {
                                                user.displayName ?
                                                    <p className='text-xl lg:text-2xl'>{user?.displayName}</p>
                                                    :
                                                    <p>Profile</p>
                                            }
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/myItems' className="justify-between text-white text-xl lg:text-2xl">My Items</Link>
                                    </li>
                                    {
                                        (user && !admin) && <>
                                            <li >
                                                <Link to='/myOrders' className='justify-between text-white text-xl lg:text-2xl'>My Orders</Link>
                                            </li>
                                        </>
                                    }
                                    {
                                        (admin) && <>
                                            <li>
                                                <Link to='/addItems' className="justify-between text-white text-xl lg:text-2xl">Add Items</Link>
                                            </li>
                                            <li >
                                                <Link to='/myOrders' className='justify-between text-white text-xl lg:text-2xl'>My Orders</Link>
                                            </li>
                                            <li ><Link className='justify-between text-white text-xl lg:text-2xl' to='/users'>Manage User</Link></li>
                                            <li ><Link className='justify-between text-white text-xl lg:text-2xl' to='/manageOrder'>Manage Orders</Link></li>
                                        </>
                                    }
                                    <li
                                        onClick={handleSignOut}
                                        className='btn btn-sm lg:btn-md btn-outline rounded-xl w-full mt-2'>

                                        Sign out
                                    </li>
                                </ul>
                            </div>
                            :
                            <NavLink className='btn btn-secondary btn-outline rounded-sm btn-sm md:btn-md' to="/login">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;