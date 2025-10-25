import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import ProductViewModal from './ProductViewModal';

function ProductCard({ productId,productName, image,description,
                       quantity,  price,  discount,  specialPrice}) {

                        
  const [openProductViewModal,setOpenProductViewModal]=useState(false);
  const btnLoader=false;
  const [selectedViewModal,setSelectedViewModal]=useState("")

  const isAvailable=quantity && Number(quantity) >0;

  const handleProductView=(product)=>{

    setSelectedViewModal(product);
    setOpenProductViewModal(true)
  }
  return (
    <div className='border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300 '>
      <div onClick={()=>{
        handleProductView({id:productId,productName, image,description,
                       quantity,  price,  discount,  specialPrice})
      }} 
      className='w-full overflow-hidden aspect-3/2'>
      <img src={image} alt={productName} 
      className='w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105'/>
      </div>
     <div className='p-4'>
        <h2 onClick={()=>{
        handleProductView({id:productId,productName, image,description,
                       quantity,  price,  discount,  specialPrice})}} 
        className='text-lg mb-2 font-semibold cursor-pointer' >
          {productName}
        </h2>

        <div className='min-h-20 max-h-20'>
          <p className='text-gray-600 text-sm'>{description}</p>
        </div>

    <div className='flex items-center justify-between'>
         {
        specialPrice ? (
           <div className='flex flex-col'>
          <span className='text-gray-700 line-through'> ${Number(price).toFixed(2)}</span>

          <span className='text-xl text-slate-700 font-bold'> ${Number(specialPrice).toFixed(2)}</span>
        </div>
        ) : (
        <div>
        <span className='text-xl text-slate-700 font-bold'> 
          ${Number(price).toFixed(2)}</span>
        </div>)
       }
       <button disabled={!isAvailable || btnLoader}
       onClick={()=>{}} 
       className={`bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600" : 
       "opacity-70"} text-white py-2 px-3 rounded-lg flex justify-center  items-center transition-colors duration-300 w-36`}>
        <FaShoppingCart className='mr-2'/>
        {isAvailable ? "Add to cart" : "Stock out"}
       </button>
    </div>
     </div>
     <ProductViewModal 
     openModal={openProductViewModal}
     setOpenModal={setOpenProductViewModal}
     product={selectedViewModal}
     isAvailable={isAvailable}/>
    </div>
  )
}

export default ProductCard
