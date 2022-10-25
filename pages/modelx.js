import Image from 'next/image'
import React, { useState } from 'react'

import Navbar from '../components/Navbar/Navbar';
import SpeedIcon from '@mui/icons-material/Speed';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import BgBlur from '../components/BgBlur';
import Menu from '../components/Menu';



const Modelx = () => {

  const [isShow,setIsShow] = useState(false);


  const handleToggle = () => {

     setIsShow(!isShow);
  }

  return (
    <>    
         <div className="sticky top-0 right-0 z-30">
           <div className=''><Navbar/></div>
         </div> 
  
         <button onClick={handleToggle} className={`overflow-y-hidden px-4 pb-0.5 
              bg-gray-400 opacity-[0.9rem] rounded-lg hover:bg-gray-500 
              cursor-pointer absolute z-30 right-7 top-[0.2rem] 
              m-3 bg-transparent text-white shadow shadow-red-500 
              xl:shadow-green-300`}>
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
      
       
       
     
        
         <div className="absolute w-[100%] z-10 font-semibold text-6xl
          text-white top-[5rem] border bg-black opacity-75 text-center">
             Model X
             <h1 className="text-[1.2rem] font-normal tracking-wide pb-1 pt-3">Plaid</h1> 
         </div>   
          
    
          <>
           <div className="flex flex-col absolute z-10 text-white bg-black py-5
            opacity-75 bottom-0 w-[100%] lg:flex lg:flex-row lg:justify-center lg:items-center">
            <div className="flex h-[4rem] justify-evenly font-semibold text-lg lg:flex-row 
             lg:items-evenly lg:space-x-[5rem] lg:my-7">
               
               <span className="text-center flex flex-col justify-between">
                 <span className="sm:text-3xl">333mi</span> 
                 <span className="font-light text-xs sm:text-[0.85rem]">Range (EPA est.)</span>
               </span>
               <span className="text-center flex flex-col justify-between">
                  <span className="flex items-start sm:text-3xl">
                    <SpeedIcon className="pb-2 sm:pb-0" fontSize="large"/>
                    2.5s
                  </span>
                  <span className="font-light text-xs sm:text-[0.85rem]">0-60 mph*</span>
               </span>
               <span className="text-center flex flex-col justify-between">
                 <span className="sm:text-3xl">9.9s</span>
                 <span className="font-light text-xs sm:text-[0.85rem]">1/4 Mile</span>  
               </span>
                 <span className="hidden flex-col justify-between text-center lg:flex">
                 <span className="text-3xl">1,020 hp</span>
                 <span className="font-light text-[0.85rem] lg:pt-[0.5rem]">Peak Power</span>
               </span>
            </div>  
            <div className="cursor-pointer border-2 h-[3rem] mx-[10%] mt-5 mb-5 flex 
              items-center rounded-md 
             justify-center sm:mx-[30%] lg:mx-[0%] lg:px-[5%] lg:ml-[5rem] 
              lg:mb-[2.1rem] hover:border-black 
             hover:bg-white hover:text-black">     
                Order Now   
            </div>  
           </div> 
          </>     
       
         
        
         <div>
          <Image
              src="https://images.unsplash.com/photo-1563720360263-0dafca427881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              layout="fill"
              alt=""
              className="object-cover"
          />  
         </div>
    </>
  );
}

export default Modelx