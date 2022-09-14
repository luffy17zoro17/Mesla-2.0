import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
import SolarPowerIcon from '@mui/icons-material/SolarPower';




const solarpanels = () => {
  return (
    <div>
       <div><Navbar/></div>
      
       <div className="absolute flex flex-col text-center justify-between min-w-[100%] 
         min-h-[100%]">
        
         <div className="absolute w-[100%] z-10 border font-semibold text-4xl sm:text-5xl md:text-6xl
          text-white mt-[5rem] bg-white pb-1 text-black opacity-75">
             Solar for Existing Roofs
            <h1 className="tracking-wider pt-4 text-[1.02rem]">
              Lowest Cost Solar Panels in America—Money-back guarantee
            </h1> 
         </div>     
         <div className="absolute z-10 flex flex-col
            items-center text-white bottom-0 h-50
            py-9 w-[100%] rounded-tl-xl rounded-br-xl bg-black 
            opacity-75">

          <div className="flex flex-col min-w-[80%] h-[20%] mb-[2rem]
           justify-end md:flex-row md:justify-center lg:min-w-[50rem]">
    
            <div className="flex justify-evenly text-xl font-semibold sm:text-3xl
             md:space-x-[1rem] min-w-[70%]"> 
               <span>
                  <SolarPowerIcon className=""/><br/>
                  <h1 className="text-xs pt-[0.5rem]">Convert Sunlight<br/>
                   to Energy</h1>
               </span>
               <span>₹<br/>
                <h1 className="text-xs pt-[0.5rem]">Guaranteed Lowest<br/>
                 Price for Solar</h1>
               </span>
               <span>24/7<br/>
                <h1 className="text-xs pt-[0.5rem]">Energy <br/> 
                Monitoring</h1>  
               </span>
            </div>  
            <div className="flex justify-center">
              <h1 className="border-[0.16rem] pt-1 pb-2 mt-7 rounded font-semibold
               w-[22rem] sm:w-[24rem] md:w-[16rem] h-[2.8rem] md:mt-0 hover:bg-white
                hover:text-black hover:border-black">
                Order Now
              </h1>
            </div>  
               
          </div>  
         
         </div> 
         <div className="">
          <Image
              src="https://images.unsplash.com/photo-1623005399662-b55f006328c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1864&q=80"
              layout="fill"
              alt=""
              className="object-cover"
          />  
         </div>
       </div>  
        
    </div>
  )
}

export default solarpanels



