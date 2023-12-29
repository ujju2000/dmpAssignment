
import React ,{useState} from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
const faqQues = [
    {
        ques : 'What is the best time to visit Dubai for a tour?', 
        sol : ' Dubai is a year-round destination, but the best time to visit is during the winter months from November to March when the weather is pleasant and ideal for exploring outdoor attractions and activities.'
    },
    {
        ques : 'Are the Burj Khalifa tickets included in the tour package?',
        sol : ' Yes, our tour package includes tickets to visit the Burj Khalifa’s 124th floor during non-peak hours. Enjoy breathtaking views of the city from the world’s tallest building as part of your itinerary.'
    },
    {
        ques : 'What should I wear during the desert safari tour?',
        sol : ' For the desert safari, it’s recommended to wear comfortable, loose-fitting clothing. During the daytime, lightweight clothing is suitable, while in the evening, a light jacket or shawl might be necessary as the desert temperature can drop.'
    },
    {
        ques : 'Can dietary preferences or restrictions be accommodated during the tours?',
        sol : ' Yes, we strive to accommodate dietary preferences or restrictions. Please inform us in advance of any specific dietary requirements, such as vegetarian, vegan, or allergies, so that appropriate arrangements can be made for meals during the tours.'
    }, 
    {
        ques : ' Is hotel pickup and drop-off included in the tour package?',
        sol : 'Absolutely! Our tour package includes convenient hotel pickup and drop-off for all scheduled activities and tours mentioned in the itinerary. We ensure a hassle-free experience by arranging transportation to and from your designated hotel.'
    }
]
export default function Faq() {
    const [sol , setShowSol] = useState(false);
    const [res, setRes] = useState("");
    const handleClick = (e,idx) => { 
        setShowSol(!sol);
        setRes(faqQues[idx].sol);
    }
   
  return (
    <div className = 'w-3/4 mx-auto my-24'>
            <h3 className = 'uppercase font-bold '>faq</h3>
            <div className = 'flex flex-col '>
            {
                faqQues.map((obj, idx)  => {
                    return (
                        <>
                            <div className = 'flex bg-slate-100 p-2 items-center cursor-pointer hover:text-white hover:bg-gray-400' onClick = {(e) => handleClick(e, idx)}>
                                {!sol ? <IoMdAdd  /> : <FaMinus /> }
                                <span className = 'grow'>{idx+1}. {obj.ques}</span>
                                {!sol ? <IoIosArrowForward /> : <IoIosArrowDown />}
                            </div>

                            {
                                sol && <>
                                    <p>
                                        {res === faqQues[idx].sol && res}
                                    </p>
                                </>
                            }
                        </>
                    )
                })
            }
        </div>
        </div>
  )
}
