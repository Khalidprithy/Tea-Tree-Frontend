import React from 'react';
import toast from 'react-hot-toast';

const User = ({ user, refetch, index }) => {
    const { email, role } = user;

    const handleAdmin = () => {
        fetch(`https://immense-savannah-21225.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin', {
                        icon: '🤷‍♂️',
                    });
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`, {
                        icon: '😃',
                    });
                }

            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><span className='text-secondary font-semibold uppercase'>{role}</span></td>
            <td className='flex gap-2'>
                <div>
                    {role !== 'admin' && <button onClick={handleAdmin} className="btn btn-xs btn-outline btn-secondary rounded-sm">Make Admin</button>}
                </div>
                <div>
                    <button className="btn btn-xs btn-outline btn-error rounded-sm ">Remove User</button>
                </div>
            </td>
        </tr>
    );
};

export default User;