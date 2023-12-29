
import React from 'react'
import Faq from '../Faq'
import PackageTour from './PackageTour'

export default function CustomizedPlan() {
  return (
    <div className=''>
        <h2 className = 'text-red-500 text-3xl text-center font-bold '>Journey through Dubai- A Customized Itinerary Plan</h2>
        
        <PackageTour title= 'Family' />

        <div className = 'w-3/4 bg-orange-300 mx-auto rounded-md flex md:flex-row flex-col items-center justify-between drop-shadow-lg shadow-black rounded-[20px] '>

            <div className = 'p-3 '>
                <h4 className='font-bold text-2xl my-3 '>Family Tour? Get Special offer of flat
                30% off!</h4>

                <h6>We Create unforgettable, adventure memory for your family.</h6>
                
                <button className = 'mt-3 bg-white text-black capitalize p-2 rounded-lg font-semibold '>Get a Callback</button>
            </div>

            <img src="assets/dubai2.jpg" alt="" className = 'border-white border-8 shadow-lg md:h-[300px] md:w-[600px] ' />
        </div>

        <PackageTour title= 'Couple' />

        <div className = 'my-10 w-full p-5 border-2 shadow-2xl flex justify-evenly items-center '>
            <div className="avatars">

            </div>

            <div>
                See What 
                <h5 className = 'font-bold'>Nethala, Vinaya & 11.5k Other Say</h5>
            </div>


            <div className = 'basis-1/3 flex items-center justify-around '>
                <h4 className = 'font-bold'>11.8k Dubai Reviews</h4>

                <button className = 'p-2 rounded-lg text-white bg-red-400 font-bold capitalize'>View More 11.5k+ Reviews</button>
            </div>
        </div>

        <PackageTour title= 'business' />

        <div className = 'mx-auto p-2 w-3/4 bg-black rounded-lg text-white flex justify-between items-start'>
                <div className = 'flex flex-col '>
                <h4 className = 'text-2xl font-bold mb-14'>Flat 30% off! On Today Booking</h4>
                <span className='font-bold '> On Selected Trips</span>
                <span>Connect with our destination expert to get exciting discounts on Dubai tour packages.</span>
                <button className='w-1/3 font-semibold text-white bg-red-400 rounded-lg p-4 mt-10 '>Know More about us</button>
            </div>

            <div className = 'text-2xl font-semibold px-2 border-dotted border-white border-2'>
                Sale Ends in 5d:8h:29m
            </div>
        </div>

        <div className='w-3/4 my-16 mx-auto text-center flex flex-col '>

            <h3 className = 'font-bold '>Why Choose KBS Travels?</h3>
            <span>Custom Itinerary Designed Tour package as per budget</span>

            <div className = 'flex justify-evenly items-center my-10 '>
                <div className = 'flex flex-col items-center'>
                    <img src="assets/rating.png" alt="" />
                    <h5 className='font-semibold'>4.8/rating</h5>
                    Cumulative rating of our package across platforms
                </div>

                <div className='flex flex-col items-center'>
                    <img src="assets/support.png" alt="" />
                    <h5 className='font-semibold'>24x7 Support</h5>
                    We are always there to help You pre, post and on the trip
                </div>

                <div className = 'flex flex-col items-center'>
                    <img src="assets/user.png" alt="" />    
                    <h5 className='font-semibold'>Curated with love</h5>
                    Expert-guide trips with planning
                </div>
            </div>
        </div>

        <Faq />
    </div>
  )
}
