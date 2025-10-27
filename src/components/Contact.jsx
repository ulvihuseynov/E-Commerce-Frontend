import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center'
    style={{backgroundImage:"url()"}}>
        <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-lg '>
            <h1 className='text-4xl text-center font-bold mb-6'>Contact us</h1>
            <p className='text-center mb-4 text-gray-600'>We would love to hear from you! Please fill out the form below or contact us directly</p>

            <form  className='space-y-4'>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Name</label>
                    <input type="text" required className='mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                 <div>
                    <label className='block text-sm font-medium text-gray-700'>Email</label>
                    <input type="email" required className='mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                 <div>
                    <label className='block text-sm font-medium text-gray-700'>Message</label>
                    <textarea rows={4} required className='mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <button className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'>Send messsage</button>
            </form>
            <div className='mt-8 text-center'>
                <h2 className='text-lg font-semibold'>Contact Information</h2>
                <div className='flex flex-col items-center space-y-2 mt-4'>
                    <div className='flex items-center'>
                        <FaPhone className='text-blue-500 mr-2'/>
                            <span className='text-gray-600'>+127 902 022 711</span>
                    </div>
                      <div className='flex items-center'>
                        <FaEnvelope className='text-blue-500 mr-2'/>
                            <span className='text-gray-600'>user@gmail.com</span>
                    </div>

                    <div className='flex items-center'>
                        <FaMapMarkedAlt className='text-blue-500 mr-2'/>
                            <span className='text-gray-600'>123, Main, Town, USA </span>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Contact
