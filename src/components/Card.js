import React from 'react'
import {FaQuoteLeft,FaQuoteRight } from "react-icons/fa"
 
const Card = ({review}) => {

  return (
    <div className="flex flex-col md:relative">
    <div className="absolute top-[-7rem] z-[10] mx-auto">
    <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25]" src={review.image}/>
  
   <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-1]"></div>
   </div>
    <p className="text-center mt-7 font-bold text-2xl tracking-wider capitalize">{review.name}</p>
    <p className="text-center   text-violet-300 uppercase text-small">{review.job}</p>
  
    <div className="text-violet-400 mx-auto mt-5" >
     <FaQuoteLeft/>
    </div>
    <p className='text-center mt-4 text-slate-500'>{review.text}</p>

    <FaQuoteRight  className="text-violet-400 mx-auto mt-5"/>
     
    </div>
  )
}

export default Card