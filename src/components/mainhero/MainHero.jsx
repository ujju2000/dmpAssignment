import React , {  useContext} from 'react'
import classes from './style.module.css';
import { FaLocationDot } from "react-icons/fa6";
import Modal from '../Modal';
import { UserContext } from '../../context/Context';
const optionStyle = 'border-r-2 shadow-lg px-6 py-5 ';

export default function MainHero() {

  const {isOpen , setIsOpen} = useContext(UserContext);
  return (
    <div className= {`relative h-[600px] mx-1 w-[99%] ${classes.main} flex items-center justify-center `} >
        
        <div className ='title text-white'>
            <h2 className = 'text-6xl font-extrabold mb-5 tracking-wide text-center'>Holiday Tour Package</h2>
            
            <div className = 'mx-auto w-5/6 p-4 text-2xl rounded-[20px] bg-white text-black flex items-center '>
              <FaLocationDot size = {30} className = 'mr-2 ' />
              <span className = 'grow'>DUBAI</span>
              
              <button className='p-2 font-bold w-[150px] rounded-lg text-white bg-red-600 uppercase ' 
                onClick = {() => setIsOpen(!isOpen)}
              >GO</button>  
            </div>
        </div>
        <div className = 'absolute bottom-[-30%] md:bottom-[-10px] md:left-[25%] shadow-lg w-full md:w-1/2 md:text-2xl text-xl md:grid  md:grid-cols-4 bg-white rounded-lg uppercase text-red-400'>
            <h3 className = {optionStyle}>travel info</h3>
            <h3 className = {optionStyle}>itnarary</h3>
            <h3 className = {optionStyle}>testimonial</h3>
            <h3 className = {optionStyle}>why kbs</h3>
        </div>
        <Modal isOpen = {isOpen} setIsOpen= {setIsOpen }/>
    </div>
  )
}
