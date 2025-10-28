import React from 'react'

function SetQuantity({quantity,
                    cartCounter,
                    handQtyIncrease,
                    handQtyDecrease}) {
  return (
    <div className='flex items-center gap-8'>
        {cartCounter ? null : <div className='font-semibold'>Quantity</div>}
        <div className='flex md:flex-row flex-col gap-4 items-center lg:text-[22px] text-sm'>
            <button 
            onClick={handQtyDecrease}
            disabled={quantity<=1}
            className='border-[1.2px] border-slate-800 px-3 py-1 rounded-md'>
                -
            </button>
            <div className='text-red-500'>{quantity}</div>
             <button 
             onClick={handQtyIncrease}
            className='border-[1.2px] border-slate-800 px-3 py-1 rounded-md'>
                +
            </button>
        </div>
    </div>
  )
}

export default SetQuantity
