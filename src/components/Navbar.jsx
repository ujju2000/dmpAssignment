
import React from 'react'
import { FaHeadset } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div className = 'w-100 py-10 px-[80px] flex items-center justify-between '>
        <div>
            <img src="assets/logo.png" alt="" className = 'ml-10 w-[300px] max-h-[50px] '/>
        </div>

        <div className="hidden w-[400px] md:flex  items-center justify-around text-slate-500 ">

        <div className = 'flex itmes-center justify-start'>
            <FaHeadset size = {30} />
            <span className = 'font-bold ml-4'>24x7 Helpline</span>
        </div>
            
        <button className = 'bg-red-400 rounded-md p-2 text-white'>+91 704211141</button>

        </div>
    </div>
  )
}
