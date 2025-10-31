import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import React from 'react'
import { FaTimes } from 'react-icons/fa'

function AddressInfoModal({open,setOpen,children}) {
  return (
  <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <DialogBackdrop transition className="fixed inset-0 bg-gray-500  opacity-75 transition" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            transition
            className="relative w-full max-w-md transform mx-auto overflow-hidden bg-white rounded-lg shadow-xl transition"
          >
        <div className='px-6 py-6'>
            {children}
        </div>
          <div className='absolute right-4 top-2 flex justify-end gap-4'>
            <button type='button'
            onClick={()=>setOpen(false)}>
                <FaTimes className='text-slate-700' size={25}/>
            </button>
          </div>
          </DialogPanel>
        </div>
      </Dialog>
      
  )
}

export default AddressInfoModal
