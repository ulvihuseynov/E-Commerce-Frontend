import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Divider } from '@mui/material';
import Status from './Status';
import { MdClose, MdDone } from 'react-icons/md';

 function ProductViewModal({openModal,setOpenModal,product,isAvailable}) {

  const {id,productName, image,description,quantity,  price,  discount,  specialPrice}=product;
  
  const handleClickOpen=(isOpen)=>{
    setOpenModal(isOpen)
  }

  return (
    <>
     

 <Dialog open={openModal} as="div" className="relative z-10" onClose={close} __demoMode>
        <DialogBackdrop className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity" />
        
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white shadow-xl
              transition-all md:max-w-[520px] md:min-w-[520px] w-full "
            >
              {
                image && (
                  <div className='flex justify-center aspect-3/2'>
                     <img src={image} alt={productName} 
                       />
                  </div>
                )
              }
              <div className='px-6 pt-10 pb-2'>
                <DialogTitle as="h1" className="lg:text-3xl sm:text-2xl text-xl font-semibold
                leading-6 text-gray-800 mb-4">
                {productName}
              </DialogTitle>
              </div>

<div className='space-y-2 text-gray-700 pb-4 px-6'>
                <div className='flex items-center justify-between gap-2'>
         {
        specialPrice ? (
           <div className='flex items-center gap-2'>
          <span className='text-gray-700 line-through'>
             ${Number(price).toFixed(2)}</span>

          <span className='text-xl text-slate-700 font-bold'>
             ${Number(specialPrice).toFixed(2)}</span>
        </div>
        ) : (
        <div>
        <span className='text-xl text-slate-700 font-bold'> 
          ${Number(price).toFixed(2)}</span>
        </div>)
       }
       {
        isAvailable ? (
          <Status
          text="In Stock"
          icon={MdDone}
          bg="bg-teal-200"
          color="text-teal-900"
          />
        ):(
           <Status
          text="Out of Stock"
          icon={MdClose}
          bg="bg-rose-200"
          color="text-rose-700"
          />
        )
       }
       </div>
       <Divider/>
              <p className="mt-2 text-sm/6 text-slate-600">
               {description}
              </p>
              <div className=' py-4 flex justify-end gap-4'>
                <button onClick={()=>handleClickOpen(!openModal)}
                className='px-4 py-2 text-sm font-semibold text-slate-700  border-2 rounded-md'
              >Close</button>
              </div>
              </div>
            </DialogPanel>
          </div>
          
        </div>
      </Dialog>
    </>
  )
}
export default ProductViewModal