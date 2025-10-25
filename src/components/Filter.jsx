import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
function Filter() {

    const categories=[
        {categoryId:1,categoryName:"Books"},
        {categoryId:2,categoryName:"Electronics"},
       { categoryId:3,categoryName:"Toys"},
        {categoryId:4,categoryName:"Furniture"}
    ];

    const {category,setCategory}=useState("all")

    const handleClickCategory=(event)=>{
        setCategory(event.target.value)
    }
  return (
    <div className='flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4'>
  <div className='relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full'>
     <input type="search" 
   placeholder='Search Products'
   className='border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full 
   focus:outline-none focus:ring-2 focus:ring-[#1976d2]'/>
   <FiSearch className="absolute left-3 text-slate-800 " size={20}/>
   
  </div>
    </div>
  )
}

export default Filter
