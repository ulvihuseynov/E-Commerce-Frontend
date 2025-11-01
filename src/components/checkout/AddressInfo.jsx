import React, { useState } from 'react'
import Skeleton from '../shared/Skeleton';
import { FaAddressBook } from "react-icons/fa";
import AddressInfoModal from './AddressInfoModal';
import AddAddressForm from './AddAddressForm';
function AddressInfo() {
    const [openAddressModal,setOpenAddressModal]=useState(false);
    const [selectedAddress,setSelectedAddress]=useState("");

    const addNewAddressHandler=()=>{
        setSelectedAddress("");
        setOpenAddressModal(true)
    }
    const noAddressExist=true;
    const isLoading=false
  return (
    <div className='pt-4'>
        {noAddressExist ? (
            <div className='p-6 flex justify-center items-center flex-col rounded-lg max-w-md mx-auto'>
                <FaAddressBook size={50} className="text-gray-500 mb-4"/>
                <h1 className='mb-2 text-2xl font-semibold text-center text-slate-900'>
                    No Address Added Yet
                </h1>
                <p className='mb-6 text-center text-slate-800'>
                    Please add your address to complete purchase
                </p>
                <button
                 onClick={addNewAddressHandler}
                 className='px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-all cursor-pointer'>Add Address</button>
            </div>
        ) :(
            <div className='relative p-6 max-w-md mx-auto rounded-lg'>
                <h1 className='text-2xl font-bold text-center text-slate-800'>
                    Select Address
                </h1>
                {
                    isLoading ? (
   
                            <div className='py-6 px-8'>
                                <Skeleton/>
                            </div>
    

                    ) :(
                        <div className='space-y-4 pt-6'>
                        <p>Address list here...</p>

                        </div>
                    )
                }
            </div>
        )}
        <AddressInfoModal
        open={openAddressModal}
        setOpen={setOpenAddressModal}>
            <AddAddressForm 
                    address={selectedAddress}
                    setOpenAddressModal={setOpenAddressModal}/>
        </AddressInfoModal>
    </div>
  )
}

export default AddressInfo
