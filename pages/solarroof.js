import React from 'react'
import Navbar from '../components/Navbar';
import Image from 'next/image';
import SolarPowerIcon from '@mui/icons-material/SolarPower';





const solarroof = () => {
  return (
    <div>
       <div><Navbar/></div>
       
       
       <div className="absolute z-0 flex flex-col text-center justify-between min-w-[100%] 
         min-h-[100%]">
        
         <div className="absolute z-10 w-[100%] border font-semibold
          text-4xl sm:text-5xl md:text-6xl
          text-black bg-white opacity-50 pb-1 mt-[5rem]">
             Solar Roof
            <h1 className="text-[1.02rem] tracking-wider pt-4">
              Transform your roof and produce clean energy
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
                  <h1 className="text-xs pt-[0.5rem]">Beautiful <br/> Solar</h1>
               </span>
               <span>25-Year<br/>
                <h1 className="text-xs pt-[0.5rem]">Tile <br/> Warranty</h1>
               </span>
               <span>24/7<br/>
                <h1 className="text-xs pt-[0.5rem]">Outage <br/> Protection</h1>  
               </span>
            </div>  
            <div className="flex justify-center">
              <h1 className="border-[0.16rem] pt-1 pb-2 mt-7 rounded font-semibold
               w-[22rem] sm:w-[24rem] md:w-[16rem] h-[2.8rem] md:mt-0 
               hover:bg-white hover:text-black hover:border-black cursor-pointer">
                Order Now
              </h1>
            </div>  
               
          </div>  
         
         </div> 
         <div className="">
          <Image
              src="https://images.unsplash.com/photo-1623696613585-7319e61a5659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80"
              layout="fill"
              alt=""
              className="object-cover"
          />  
         </div>
       </div>  
        
    </div>
  )
}

export default solarroof


