import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[100vh] aboutbg relative '  >
    <Link to="/"> <div className="top-28 left-24 absolute">
    <ion-icon size="large" name="arrow-back-circle-outline"></ion-icon>
    </div></Link>
   
            <div className="border-2 rounded-2xl px-12 py-4 w-[300px] flex justify-center bg-white">
                <h1 className='gradienttext text-3xl font-bold'>About us</h1>
            </div>
            <div className="mt-16 animate-bounce"><img className='w-[200px] h-[200px]' src={logo} alt="" /></div>
            <div className="p-8 w-3/5"><p className='text-white mt-8 text-center text-xl'> We are a group of Students from Amity University, Patna. 
            This website portal is our major project under guidance of Dr. Neeraj Kumar Rai. 
            This Websit is a portal where a common citizen can submit their applicatons regarding Government Services.
            Our Aim is to Provide easy and userfriendly website where even a layman can use and submit their complaints to respective Governments servies.</p></div>
    </div>
  )
}
