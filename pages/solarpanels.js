import Image from 'next/image'
import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import BgBlur from '../components/BgBlur';
import Menu from '../components/Menu';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';




const Solarpanels = () => {

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
              cursor-pointer absolute z-30 right-4 top-[0.2rem] 
              m-3 xl:bg-transparent text-white shadow shadow-red-500
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
       
         <div className="absolute w-[100%] text-center z-10 border font-semibold 
          text-4xl py-2
          sm:text-5xl md:text-6xl
          text-white mt-[5rem] bg-white text-black opacity-75">
             Solar for Existing Roofs
            <h1 className="tracking-wider pt-4 text-[1.02rem]">
              Lowest Cost Solar Panels in America—Money-back guarantee
            </h1> 
         </div>     
         <>
           <div className="flex flex-col absolute z-10 text-white bg-black py-5
            opacity-75 bottom-0 w-[100%] lg:flex lg:flex-row lg:justify-center lg:items-center">
            <div className="flex h-[5rem] justify-evenly font-semibold text-lg lg:flex-row 
             lg:items-evenly lg:space-x-[5rem] lg:my-7">
               
               <span className="text-center flex flex-col justify-between">
                 <span className="sm:text-3xl">
                  <SolarPowerIcon className="py-1 pb-2 sm:py-0 sm:pb-2" fontSize="large"/>
                 </span> 
                 <span className="font-light text-xs sm:text-[0.85rem]">
                  Convert Sunlight<br/> to Energy
                 </span>
               </span>
               <span className="text-center flex flex-col items-center justify-between">
                  <span className="flex sm:text-3xl">
                  $
                  </span>
                  <span className="font-light text-xs sm:text-[0.85rem]">
                     Guaranteed Lowest<br/> Price for Solar
                  </span>
               </span>
               <span className="text-center flex flex-col justify-between">
                 <span className="sm:text-3xl">24/7</span>
                 <span className="font-light text-xs sm:text-[0.85rem]">Energy<br/> Monitoring</span>  
               </span>
    
            </div>  
            <div className="cursor-pointer 
             border-2 h-[3rem] mx-[10%] mt-5 mb-5 flex items-center rounded-md 
             justify-center sm:mx-[30%] lg:mx-[0%] lg:px-[5%] lg:ml-[5rem] lg:mb-[2.1rem] 
             hover:border-black 
             hover:bg-white hover:text-black">     
                Order Now   
            </div>  
           </div> 
          </>     
       
         
        
         <div>
          <Image
              src="https://cdn.pixabay.com/photo/2022/01/13/14/45/house-6935453_960_720.jpg"
              layout="fill"
              alt=""
              className="object-cover"
          />  
         </div>
      
   </> 
  )
}

export default Solarpanels







{/* <SolarPowerIcon className=""/><br/> */}

// ₹

// "https://images.unsplash.com/photo-1623005399662-b55f006328c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1864&q=80"