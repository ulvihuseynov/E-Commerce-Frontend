import React, { useEffect, useState } from 'react'
import { FiArrowDown, FiArrowUp, FiRefreshCw, FiSearch } from "react-icons/fi";

import { Button, FormControl, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function Filter({categories}) {

    const [searchParams] = useSearchParams();
     const params=new URLSearchParams(searchParams)
     const pathName = useLocation().pathname;
      

    const navigate=useNavigate()

    const [category,setCategory]=useState("all")
    const [sortOrder,setSortOrder]=useState("asc")
    const [searchTerm,setSearchTerm]=useState("")
    console.log(searchTerm)
    useEffect(()=>{
      const currentCategory=searchParams.get("category")||"all";
      const currentSortOrder=searchParams.get("sortby")||"asc";
      const currentSearchTerm=searchParams.get("keyword")||"";

      setCategory(currentCategory)
      setSortOrder(currentSortOrder)
      setSearchTerm(currentSearchTerm)
    },[searchParams])

    useEffect(()=>{
      const handler=setTimeout(() => {
        if (searchTerm) {
        searchParams.set("keyword",searchTerm)
      } else {
        searchParams.delete("keyword")
      }
      navigate(`${pathName}?${searchParams.toString()}`)
      }, 700);

      return()=> {
        clearTimeout(handler)
    }
    },[searchParams,searchTerm,navigate,pathName]);

    const handleClickCategory=(event)=>{
      const selectedCategory=event.target.value;

      if (selectedCategory==="all") {
        params.delete("category")
      } else {
        params.set("category",selectedCategory)
      }
      navigate(`${pathName}?${params}`)
       setCategory(event.target.value)
    }

    const toggleSortOrder=()=>{

        setSortOrder((prevOrder)=>{
          const newOrder=(prevOrder==="asc") ? "desc" :"asc";
          params.set("sortby",newOrder)
          navigate(`${pathName}?${params}`);
          return newOrder;
        })
    }

    const handleClickClear=()=>{
      navigate({pathname:window.location.pathname})
    }
  return (
    <div className='flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4'>
  <div className='relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full'>
     <input type="search" 
     value={searchTerm}
     onChange={e=>setSearchTerm(e.target.value)}
   placeholder='Search Products'
   className='border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full 
   focus:outline-none focus:ring-2 focus:ring-[#1976d2]'/>
   <FiSearch className="absolute left-3 text-slate-800 " size={20}/>
  </div>
  <div className="flex sm:flex-row flex-col gap-4 items-center">
    <FormControl
    className='text-slate-800 border-slate-700'
     variant="outlined" size="small">
        <InputLabel  id='category-select-label'>Category</InputLabel>
        <Select
         labelId='category-select-label'
         value={category}
         onChange={e=>handleClickCategory(e)}
         label="category"
         className='min-w-[120px] text-slate-800 border-slate-700'>
          <MenuItem value="all">All</MenuItem>
          {categories.map(item=>(
            <MenuItem value={item.categoryName} key={item.categoryId}>{item.categoryName}</MenuItem>
          ))}
         </Select>
    </FormControl>
    <Tooltip title="Sorted by price: asc">
      <Button 
      onClick={toggleSortOrder}
      variant="contained" 
      color="primary"
      className='flex items-center gap-2 h-10'>
        Sort By
        {sortOrder==="desc"? <FiArrowUp size={20}/>
        : <FiArrowDown size={20}/>}
      </Button>
    </Tooltip>
    <button 
    onClick={handleClickClear}
    className='flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md
    transition duration-300 ease-in shadow-md focus:outline-none cursor-pointer'>
      <FiRefreshCw className='font-semibold' size={16}/>
      <span className='font-semibold'>Clear Filter</span>
      </button>
  </div>
    </div>
  )
}

export default Filter
