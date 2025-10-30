import React from 'react'

function BackDrop({data}) {
  return (
    <div className={`z-20 transition duration-200 opacity-50 w-screen h-screen bg-slate-300 fixed ${data ? "top-16" :"top-0"} left-0`}>
      
    </div>
  )
}

export default BackDrop
