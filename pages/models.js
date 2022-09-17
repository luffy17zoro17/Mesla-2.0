import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar';
import SpeedIcon from '@mui/icons-material/Speed';

const models = () => {
  return (
    <div>
       <div className="absolute z-10 w-[100%] border h-[3.6rem] bg-black opacity-75">
        <Navbar/>
       </div>
       
       
       <div className="absolute flex flex-col text-center justify-between min-w-[100%] 
         min-h-[100%]">
        
         <div className="absolute w-[100%] z-10 font-semibold text-6xl border
          bg-black opacity-50 text-white mt-[5rem]">
             Model S
             <h1 className="text-[1.2rem] font-normal tracking-wide pb-1 pt-3">Plaid</h1> 
         </div>   
          
         <div className="absolute z-10 flex flex-col
             text-white bottom-0 h-50
            py-9 w-[100%] rounded-tl-xl rounded-br-xl bg-black 
            opacity-75">

          <div className="flex flex-col h-[20%] mb-[2rem]
           justify-center lg:flex-row">
    
            <div className="flex text-xl font-semibold justify-center
             sm:text-3xl sm:space-x-[2rem]">
               
               <span className="w-[8rem]">396 mi <br/>
                <h1 className="text-xs pt-[0.5rem]">Range (EPA est.)</h1>
               </span>
               <span className="w-[8rem]">
                  <SpeedIcon className="scale-[60%] sm:scale-[100%] 
                   sm:mr-1 sm:mb-2" fontSize="large"/>1.99 s <br/>
                  <h1 className="text-xs">0-60 mph*</h1>
               </span>
               <span className="w-[8rem]">200 mph<br/>
                <h1 className="text-xs pt-[0.5rem]">Top Speed†</h1>  
               </span>
               <span className="hidden lg:flex flex-col w-[8rem]">1,020 hp<br/>
                <h1 className="text-xs pt-[0.5rem]">Peak Power</h1>
               </span>
            </div>  
            <div className="w-[100%] flex justify-center lg:w-[16rem]">
              <div className="border-[0.16rem] pt-1 pb-2 mt-7 rounded font-semibold
               cursor-pointer w-[25rem] lg:w-[22rem] lg:ml-[3rem]
               h-[2.8rem] lg:mt-0 hover:border-black hover:bg-white
                hover:text-black">
                Order Now
              </div>
            </div>  
               
          </div>  
         
         </div> 
         <div className="">
          <Image
              src="https://images.unsplash.com/photo-1617719134320-22d03ed67fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              layout="fill"
              alt=""
              className="object-cover"
          />  
         </div>
       </div>  
        
    </div>
  )
}

export default models



// 