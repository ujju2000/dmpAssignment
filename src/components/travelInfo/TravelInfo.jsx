
import React, { useState } from 'react'
import { MdOutlineMenuBook } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";


const readMoreInfo = [
    {title  : 'Explore Dhow Cruise at Marina' , content : 'Experience Dubai’s enchanting nights aboard a traditional dhow cruise gliding through the Marina waters. Admire the city’s iconic skyline, elegantly illuminated against the night sky, while relishing a delectable buffet dinner.'},
    {title : 'Ascend Burj Khalifa', content : 'Dare to touch the sky! Ascend to the 124th floor of the Burj Khalifa, the world’s tallest building, for awe-inspiring views. Witness the city’s splendor from a vantage point that defines luxury and innovation.'} ,
    {title : 'Desert Safari Adventure' , content : 'Embark on a thrilling desert safari adventure. Feel the adrenaline rush with dune bashing, delve into the heart of the desert, and embrace the warmth of Arabian hospitality at a traditional desert camp. Indulge in a lavish BBQ dinner while enjoying traditional entertainment like belly dancing.'},
    {title : 'Half-Day Dubai City Tour' , content : 'Dive into the heart of Dubai’s culture and history. Wander through the bustling streets of the old city, discover the spice and gold souks, and witness the evolution from traditional heritage to futuristic marvels. Dubai Fountain Show: Be captivated by the world-renowned Dubai Fountain Show, a spectacle of water, music, and light. Witness the harmonious dance of the fountains against the backdrop of the iconic Burj Khalifa.'},
    {title : 'Tailored Experiences, Unforgettable Memories' , content : 'At KBS Travel, we curate exceptional travel experiences tailored to your preferences. Our expert guides ensure a seamless and immersive journey through Dubai’s wonders, leaving you with unforgettable memories.'}
    
]
export default function TravelInfo() {
    const [readMore, setReadMore] = useState(false);
    const [travelInfo , setTravelInfo] = useState(true);

    const handleTravelInfo = () => {
        setReadMore(false);
        setTravelInfo(true);
    }
    const handleReadMore = () => {
        setTravelInfo(false);
        setReadMore(true);
    }
  return (
    <div className = 'w-3/4 p-2 bg-slate-200 mx-auto my-[50px] rounded-lg'>
        <div className=' '>
            <div className = 'flex justify-end items-center '>
                <button className = {`w-[140px]  bg-gray-500 px-4 py-2 flex items-center justify-around  mr-2 ${travelInfo ? 'text-black' : 'text-white'}`}
                onClick = {handleTravelInfo}
                >
                    <MdOutlineMenuBook />
                    Travel Info
                </button>

                <button className = {`w-[140px]  bg-gray-500 px-4 py-2 flex items-center justify-around  mr-2 ${readMore ? 'text-black' : 'text-white'}`}
                onClick={handleReadMore}
                >
                    <FaGlobeAmericas />
                    Read More
                </button>

            </div>
            {
                    travelInfo && <>
                        <h3 className = 'font-bold m-4 '>
                            Dubai and Abu Dhabi with FREE Yacht Cruise Dinner Experience Package Details
                        </h3>

                        <p className = 'm-4'>
                            Unveil the mesmerizing cityscape and cultural treasures of the Middle East by embarking on a journey to Dubai. Nestled along the shimmering coastline of the Arabian Gulf, Dubai stands as a testament to modern innovation seamlessly blended with traditional charm
                        </p>
                    </>
            }
            {
                    readMore && <>
                        <h3 className = 'font-bold m-4 '>
                            Discover Dubai's Magnificence
                        </h3>

                        {
                            readMoreInfo.map((obj) => <div className = 'm-4'>
                                <h3 className='font-bold italic'>{obj.title}:</h3>
                                <p className = ''>{obj.content}</p>
                            </div>
                            )}
                    </>
            }
                
        </div>
    </div>
  )
}
