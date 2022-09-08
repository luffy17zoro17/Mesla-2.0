import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar';
import SpeedIcon from '@mui/icons-material/Speed';

const models = () => {
  return (
    <div>
       <div><Navbar/></div>
       
       
       <div className="absolute flex flex-col text-center justify-between min-w-[100%] 
         min-h-[100%]">
        
         <div className="absolute w-[100%] z-10 border font-semibold text-6xl
          text-white mt-[7%]">
             Model S
         </div>     
         <div className="absolute z-10 flex flex-col justify-end 
          items-center text-white top-[20%] h-[80%] w-[100%] border-4">

          <div className="flex flex-col min-w-[80%] h-[20%] mb-[2rem]
           justify-end md:flex-row md:justify-center lg:min-w-[50rem]">
    
            <div className="flex justify-evenly text-xl font-semibold sm:text-3xl
             md:space-x-[1rem] min-w-[70%]">
               <span>
                  <SpeedIcon className="scale-[60%] sm:scale-[110%] 
                   sm:mr-1 sm:mb-2" fontSize="large"/>3.1s <br/>
                  <h1 className="text-xs">0-60 mph*</h1>
               </span>
               <span>358mi <br/>
                <h1 className="text-xs pt-[0.5rem]">Range (EPA est.)</h1>
               </span>
               <span>AWD<br/>
                <h1 className="text-xs pt-[0.5rem]">Dual Motor</h1>  
               </span>
            </div>  
            <div className="flex justify-center">
              <h1 className="border-[0.16rem] pt-1 pb-2 mt-7 rounded font-semibold
               w-[22rem] sm:w-[24rem] md:w-[16rem] h-[2.8rem] md:mt-0">
                Order Now
              </h1>
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