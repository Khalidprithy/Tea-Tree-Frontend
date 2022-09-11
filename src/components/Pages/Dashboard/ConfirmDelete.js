import React from 'react';
import toast from 'react-hot-toast';

const ConfirmDelete = ({ deleteProduct, refetch, setDeleteProduct }) => {
    const { name, email } = deleteProduct;

    const handleDelete = () => {
        fetch(`https://immense-savannah-21225.herokuapp.com/purchase/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Order ${name} is deleted`)
                    setDeleteProduct(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="confirm-delete" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box rounded-md">
                    <h3 className="font-bold text-lg"><span className='text-error'>Confirm delete product:</span> <span className='text-secondary'>{name}</span></h3>
                    <p className="py-4">You are deleting a order from your orders. Are you sure you want to cancel this order?</p>
                    <div className="modal-action">
                        <button
                            onClick={() => handleDelete()}
                            className="btn btn-xs btn-outline bg-error rounded-sm text-white hover:bg-red-700" >Delete</button>
                        <label for="confirm-delete" className="btn btn-xs btn-outline rounded-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ConfirmDelete;