import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import { IoMdLogIn } from "react-icons/io";
import InputField from '../shared/InputField';
function Login() {

    const navigate=useNavigate();
    const [loader,setLoader]=useState(false);
    const{register,handleSubmit,formState:{errors}}=useForm({mode:"onTouched"})
    const loginHandler=async(data)=>{
            console.log("cliked")
    }
  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
            <form 
            onSubmit={handleSubmit(loginHandler)}
            className='sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md'>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                           <IoMdLogIn className='text-slate-800 text-5xl'/>
                           <h1 className='text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold'>
                            Login here
                           </h1> 
                    </div>
                    <hr className='mt-2 mb-5 text-black'/>
                    <div className='flex flex-col gap-3'>

                        <InputField
                        label="UserName"
                        required
                        id="username"
                        type="text"
                        message="*Username is required"
                        placeholder="Enter your username"
                        register={register}
                        errors={errors}/>

                        <InputField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        placeholder="Enter your password"
                        register={register}
                        errors={errors}/>
                    </div>
                    <button className='bg-button-gradient flex items-center justify-center gap-2 font-semibold text-white w-full py-2 hover:text-slate-400 transition duration-100 rounded-sm my-3'
                     disabled={loader} type="submit">
                        {loader ? (
                            <p>Loading...</p>
                        ):(<p>Login</p>)}
                     </button>
                     <p className='text-center text-sm text-slate-700 mt-6'>
                        Don't have account?
                        <Link className='font-semibold underline hover:text-black'
                        to="/register">
                        <span>SignUp</span>
                        </Link>
                     </p>
            </form>
    </div>
  )
}

export default Login
