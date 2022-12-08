import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading'
import User from './User';

const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://teatree-server.onrender.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='bg-white'>
            <h1 className='text-xl font-bold text-center py-6'>Manage All Users</h1>
            <div className="overflow-x-auto mx-10">
                <table className="table w-full mb-10">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <User
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;

