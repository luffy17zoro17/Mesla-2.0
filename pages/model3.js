import Image from 'next/image'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SpeedIcon from '@mui/icons-material/Speed';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BgBlur from '../components/BgBlur';
import Menu from '../components/RightSlideBar/Menu';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';




const Model3 = () => {

  const [isShow,setIsShow] = useState(false);


  const handleToggle = () => {

     setIsShow(!isShow);
  }


  return (
    <div>
    <>
    <Navbar/>
  
      <button onClick={handleToggle} className={`overflow-y-hidden px-4 pb-0.5
        bg-gray-400 opacity-[0.9rem] rounded-lg hover:bg-gray-500 
        cursor-pointer fixed z-30 right-4 top-[0.2rem] 
        m-3 xl:bg-transparent xl:text-white xl:shadow xl:shadow-green-300`}>
         Menu
      </button>
      {isShow ?
      (
        <>   
           <BgBlur/> 
           <Menu/>
           
         
         <button onClick={handleToggle} className="absolute z-50 top-7 right-11">
            <CancelPresentationIcon 
              className="text-white p-[0.2rem]
             hover:bg-gray-600 rounded scale-[1.5]"/>
         </button>
        </>
      ) : (<div></div>)}
         
       
       
        
         <h1 className="w-[100%] font-semibold text-6xl text-center 
          text-white border-2 bg-black opacity-50 absolute z-10 top-[12%] border-4">
             Model 3
         </h1 >     
         <>
           <div className="flex flex-col absolute z-10 text-white bg-black py-5 h-[13rem]
            opacity-75 bottom-0 w-[100%] lg:flex lg:flex-row lg:justify-center lg:items-center">
            <div className="flex h-[4rem] justify-evenly font-semibold text-lg lg:flex-row 
             lg:items-evenly lg:space-x-[5rem] lg:my-7">
               
               <span className="text-center flex flex-col justify-between">
                 <span className="sm:text-3xl"><SpeedIcon fontSize="large" className="pb-2 sm:pb-0 sm:mb-2"/> 3.1 s</span> 
                 <span className="font-light text-xs sm:text-[0.85rem]">0-60 mph*</span>
               </span>
               <span className="text-center flex flex-col items-center justify-between">
                  <span className="flex sm:text-3xl">
                    358 mi
                  </span>
                  <span className="font-light text-xs sm:text-[0.85rem]">Range (EPA est.)</span>
               </span>
               <span className="text-center flex flex-col justify-between">
                 <span className="sm:text-3xl">AWD</span>
                 <span className="font-light text-xs sm:text-[0.85rem]">Dual Motor</span>  
               </span>
    
            </div>  
            <div className="cursor-pointer border-2 h-[3rem] mx-[10%] mt-5 mb-5 flex items-center rounded-md 
             justify-center sm:mx-[30%] lg:mx-[0%] lg:px-[5%] lg:ml-[5rem] lg:mb-[2.1rem] hover:border-black 
             hover:bg-white hover:text-black">     
                Order Now   
            </div>  
            <div className="hidden absolute mt-4 z-10 bottom-1 flex w-[100%] justify-center sm:flex">
              <KeyboardArrowDownIcon fontSize="large" className=""/>
            </div> 
           </div> 
          </>     
       
         
        
         <div>
          <Image
              src="https://images.unsplash.com/photo-1619572945516-7598cb601a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
              layout="fill"
              alt=""
              className="object-cover"
          />  
         </div>
      </>
    </div>
    );
         
}

export default Model3


// https://images.unsplash.com/photo-1619572945516-7598cb601a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80


// "https://images.unsplash.com/photo-1642569135400-9e09b38dc200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80