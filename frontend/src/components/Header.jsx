import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import {  logowhite,Joinus} from '.';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


function Header() {
   const [isOpenPopup,setisOpenPopup] = useState(false)
   const [isVisible,setIsVisible]=useState(false)
   const [isOpenMenu,setisOpenMenu] = useState(false)

   const toggleMenu=()=>{
    setisOpenMenu(!isOpenMenu);
   }


   const openPopup=()=>{
    setisOpenPopup(true)
   }
   const closePopup=()=>{
    setisOpenPopup(false)
   }
   
   useEffect(()=>{
    setTimeout(()=>{
      setIsVisible(true)
    },100)
   })


  return (
   
    <nav className="fixed inset-x-0  md:top-4 lg:top-4 z-40 mx-auto w-full bg-white/20 py-1 shadow backdrop-blur-md md:rounded-3xl lg:max-w-screen-lg ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-14 items-center">
        
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-8 w-full" src={logowhite} alt="Innovxus" />
          </div>
          {/* Menu Items */}
          <div className="flex-grow   flex justify-center">
            <div className=' md:bg-[#3433337e] -ml-20 px-4 py-3 md:rounded-full'>
              <div className='hidden md:flex space-x-8'>
            <NavLink to='/' className={({isActive})=>`${isActive? 'text-white ' : 'text-gray-300 hover:text-white'}`}>
              Home
            </NavLink>
            <NavLink to="/events" className={({isActive})=>`${isActive? 'text-white ' : 'text-gray-300 hover:text-white'}`}>
              Events
            </NavLink>
            {/* <NavLink to='/members' className={({isActive})=>`${isActive? 'text-white ' : 'text-gray-300 hover:text-white'}`}>
              Members
            </NavLink> */}
            <NavLink to='/aboutus' className={({isActive})=>`${isActive? 'text-white ' : 'text-gray-300 hover:text-white'}`}>
              About us
            </NavLink>
            </div>
            </div>
          </div>
        
        {/* Sign Up Button */}
        <div className="hidden md:flex">
          {/* <a
            href="#"
            className="text-white bg-gradient-to-r from-[#cf24ee] to-[#7b037b] hover:from-purple-700 hover:to-purple-950 px-4 py-2 rounded-full transition duration-300 ease-in-out"
          >
            Join Us
          </a> */}
          <button
           onClick={openPopup}
           className="text-white bg-gradient-to-r from-[#ee2b24] to-[#7b2503] hover:from-purple-700 hover:to-purple-950 px-4 py-2 rounded-full transition duration-300 ease-in-out"
           >
            Join Us
          </button>
         

          {isOpenPopup && <Joinus onClose={closePopup}/>  }
        </div>
        <button className='md:hidden text-white' onClick={toggleMenu}>
          {isOpenMenu ? <IoClose/> : <IoMenu/> }
          </button>
      </div>
    </div>
    {
  isOpenMenu && (
    <div className=" fixed md:hidden right-0 top-16 p-4 w-[50%] h-80  flex-col backdrop-filter 
    backdrop-blur-lg  bg-[rgba(5,5,5,0.84)]   ease-in-out duration-500 rounded-md">
    <div className=" flex gap-8 flex-col " >
      <NavLink to="/" onClick={toggleMenu} className={({isActive})=>`'text-xl ' ${isActive? 'text-white ' : 'text-gray-300 hover:text-white'}`}>Home</NavLink>
      <NavLink to="/events" onClick={toggleMenu} className={({isActive})=>`'text-xl'${isActive? 'text-white  ' : 'text-gray-300 hover:text-white'}`}>Events</NavLink>
     
      <NavLink to="/aboutus" onClick={toggleMenu} className={({isActive})=>`'text-xl'${isActive? 'text-white ' : 'text-gray-300 hover:text-white'}`}>About Us</NavLink>
     
    </div>
   </div>
    
    
  )
}
  </nav>





  )
}

export default Header