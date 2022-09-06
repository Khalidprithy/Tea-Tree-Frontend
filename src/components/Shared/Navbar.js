import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import logo1 from '../../images/Logo1.png'
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {

    const [user, setUser] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setUser({});
            })
    }

    const menuItems = <>
        <li className='font-semibold text-neutral text-xl'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-neutral text-xl'><Link to='/products'>Product</Link></li>
        <li className='font-semibold text-neutral text-xl'><Link to='/purchases'>About</Link></li>
    </>

    return (
        <div>
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
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-secondary"><img className='w-32' src={logo1} alt="" /></Link>
                </div>
                <div className="navbar-center hidden md:flex lg:flex-auto">
                    <ul className="menu menu-horizontal p-0 md:pr-8">
                        {menuItems}
                    </ul>
                </div>
                <div className="flex-none">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user.photoURL ?
                                                <img src={user?.photoURL} alt='' />
                                                :
                                                <img src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg" alt='' />
                                        }
                                    </div>
                                </label>
                                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                                    <li>
                                        <Link to='/profile' className="justify-between text-white">
                                            {
                                                user.displayName ?
                                                    <p className='text-xl'>{user?.displayName}</p>
                                                    :
                                                    <p>Profile</p>
                                            }
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/myItems' className="justify-between text-white text-xl">My Items</Link>
                                    </li>
                                    <li>
                                        <Link to='/addItems' className="justify-between text-white text-xl">Add Items</Link>
                                    </li>
                                    <li className='justify-between text-white text-xl'><Link to='/myOrders'>My Orders</Link></li>
                                    <li>
                                        <button
                                            onClick={handleSignOut}
                                            className='sign-out btn-accent text-black w-1/2 mt-2'>Sign out </button>
                                    </li>
                                </ul>
                            </div>
                            :
                            <NavLink className='btn btn-secondary btn-outline rounded-sm btn-sm' to="/login">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;