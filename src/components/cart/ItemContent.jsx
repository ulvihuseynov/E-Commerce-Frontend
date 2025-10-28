import React, { useState } from 'react'
import { HiOutlineTrash } from "react-icons/hi";
import SetQuantity from './SetQuantity';
import { useDispatch } from 'react-redux';
import { decreaseCartQuantity, increaseCartQuantity, removeFromCart } from '../../store/actions';
import toast from 'react-hot-toast';
function ItemContent({productId,productName, image,description,
                      quantity,  price,  discount,  specialPrice,cartId}) {

  const [currentQuantity,setCurrentQuantity] =useState(quantity)    
  const dispatch=useDispatch();
  const handleQtyIncrease=(cartItems)=>{

    dispatch(increaseCartQuantity(cartItems,toast,currentQuantity,setCurrentQuantity))
  } 

  const handleQtyDecrease=(cartItems)=>{

    if (currentQuantity>1) {
      const newQuantity=currentQuantity-1;
      setCurrentQuantity(newQuantity);
      dispatch(decreaseCartQuantity(cartItems,newQuantity))
    }
  } 
   const removeItemFromCart=(cartItems)=>{

    dispatch(removeFromCart(cartItems,toast))
    
  }             
  return (
    <div className='grid md:grid-cols-5 grid-cols-4 md:text-md text-sm gap-4 items-center border border-slate-200'>
     <div className='md:col-span-2 justify-self-start flex flex-col gap-2 p-4'>
        <div className='flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start '>
            <h3 className='lg:text-[17px] text-sm font-semibold text-slate-600'>{productName}</h3>
        </div>
        <div className='md:w-36 sm:w-24 w-12 '>
            <img src={image} alt={productName} className='md:h-36 sm:h-24 h-12 w-full object-cover rounded-md'/>
       
        <div className='flex items-start gap-5 mt-3'>
            <button
            onClick={()=>removeItemFromCart({
          image,
          productName,
          specialPrice,
          price,
          productId,
          description,
          quantity
         })}
             className='flex items-center font-semibold space-x-2 px-4 py-1 text-xs border border-rose-600 text-rose-600 rounded-md hover:bg-red-50 transition duration-300'>
                <HiOutlineTrash size={16} className="text-rose-600"/>
                Remove 
                </button>
                 </div>
        </div>
     </div>
     <div className='justify-self-center lg:text-[17px] text-sm font-semibold text-slate-600'>
          {Number(specialPrice)}
     </div>
     <div className='justify-self-center'>
         <SetQuantity
         quantity={currentQuantity}
         cartCounter={true}
         handQtyIncrease={()=>handleQtyIncrease({
          image,
          productName,
          specialPrice,
          price,
          productId,
          description,
          quantity
         })}
         handQtyDecrease={()=>{handleQtyDecrease({
              image,
          productName,
          specialPrice,
          price,
          productId,
          description,
          quantity
         })}}/>
     </div>
     <div className='justify-self-center lg:text-[17px] text-sm font-semibold text-slate-600'>
          {Number(specialPrice)*Number(quantity)}
     </div>
    </div>
  )
}

export default ItemContent
