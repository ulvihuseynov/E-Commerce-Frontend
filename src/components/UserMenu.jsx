import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BiUser } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { IoExitOutline } from "react-icons/io5";
import BackDrop from './BackDrop';
import { logOutUser } from '../store/actions';
function UserMenu() {

    const {user}=useSelector(state=>state.auth);
    const dispatch=useDispatch()
    const navigate=useNavigate()
      const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const logoutHandler=()=>{
        dispatch(logOutUser(navigate))
}
  return (
    <div className='relative z-30'>
      <div
        className='sm:border sm:border-slate-400 flex flex-row items-center rounded-full gap-1 cursor-pointer hover:shadow-md transition text-slate-700'
        onClick={handleClick}
      >
       <Avatar alt='Menu' src=''/>
      </div>
      <Menu
        sx={{width:"400px"}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
         slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
            sx:{width:160}
          },
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Link to="/profile" className="flex gap-2">
        <MenuItem onClick={handleClose}>
            <BiUser className="text-xl"/>
            <span className='font-bold text-[16px] mt-1 px-2'>
                {user?.userName}
            </span>
        </MenuItem>
        </Link>
         <Link to="/profile/orders" className="flex gap-2">
        <MenuItem onClick={handleClose}>
            <FaShoppingCart className="text-xl "/>
            <span className='font-semibold px-2'>
                Order
            </span>
        </MenuItem>
        </Link>
      <MenuItem onClick={logoutHandler}>
            <div className='flex items-center font-semibold gap-2 w-full bg-button-gradient px-4 py-1 rounded-sm text-white'>
            <IoExitOutline className="text-xl"/>

            <span className='font-bold text-[16px] mt-1'>
              LogOut
            </span>
            </div>
        </MenuItem>
      </Menu>
      {open && <BackDrop/>}
    </div>
  );
   
}

export default UserMenu
