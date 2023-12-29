
import React, { useContext } from 'react'
import { GiMeal } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { SiCoffeescript } from "react-icons/si";
import { BsBinocularsFill } from "react-icons/bs";
import { UserContext } from '../../context/Context';
export default function PackageTour({title}) {
    const {setIsOpen , isOpen} = useContext(UserContext);
  return (
    <div className='md:w-[70%] mx-auto my-[30px] flex items-center justify-between flex-col md:flex-row '>
        
        <img src="/assets/packageImg.jpg" alt="" className = 'h-[400px] w-[600px] rounded-md mr-6'/>

        <div className='flex flex-col '>
            <h4 className='font-bold capitalize text-2xl '> {title} tour package of dubai </h4>
            <span className='mb-2 '>Ouality time with family</span>

            <hr className='bg-black h-[2px]'/>

            <ul className='list-disc'>
                <li>Marina Show Cruise with Buffet Dinner</li>
                <li>3 Star Hotel stay for 3 nights</li>
                <li>Half Day Dubai City Tour</li>
                <li>Dessert Safari with BBQ Dinner & Entertainment</li>
                <li>Dubai View from Burf Khalifa 124th Floor Visit</li>
                <li>3 Breakfast and 3 Dinner</li>
                <li>Private Cab for sightseen , pickup & drop</li>
            </ul>
            
            <hr className='bg-black h-[2px]'/>

            <div className = 'mt-2 grid grid-cols-2 '>
                <div className='flex items-start justify-start'>
                    <img src="assets/tick.png" alt="" className = 'h-[25px] w-[25px] mr-2' />
                    <div>
                        <h5 className = 'font-bold '>Guaranteed Best Price</h5>
                        <span>Best Deal Available</span>
                    </div>
                </div>

                <div className='flex items-start justify-start'>
                    <img src="assets/trust.png" alt="" className = 'h-[25px] w-[25px] mr-2' />
                    <div>
                        <h5 className = 'font-bold'>5 Star rated on google</h5>
                        <span>Customer Trust and Satisfaction</span>
                    </div>
                </div>

                <div className='flex items-start justify-start'>
                    <GiMeal size = {30} className = 'mr-2'/>
                    <div>
                        <h5 className = 'font-bold'>
                            Meals
                        </h5>
                        <span>4 Breakfasts and 4 Dinner</span>
                    </div>
                </div>

                <div className='flex items-start justify-start'>
                    <MdOutlineSupportAgent size = {30} className = 'mr-2' />
                    <div>
                        <h5 className = 'font-bold'>24x7 Customer Support</h5>
                        <span>Dedicated person for Assistance</span>
                    </div>
                </div>
            </div>

            <hr className='bg-black h-[2px]'/>

            <div className='mt-4 flex items-center justify-around '>
                    <FaHotel />
                    Hotel
                
                    <FaCarRear />
                    Transfer
                
                    <SiCoffeescript />
                    Meal
                
                    <BsBinocularsFill />
                    SightSeeing
                  
                <button className = 'bg-red-500 text-white font-bold text-center p-2 rounded-md'
                    onClick = {() => setIsOpen(!isOpen)}
                >Get a Callback</button>
            </div>
        </div>
    </div>
  )
}

