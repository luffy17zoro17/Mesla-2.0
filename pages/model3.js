import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
import SpeedIcon from '@mui/icons-material/Speed';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const model3 = () => {
  return (
    <div>
       <div><Navbar/></div>
       
       
       <div className="absolute flex flex-col text-center justify-between min-w-[100%] 
         min-h-[100%]">
        
         <div className="absolute w-[100%] z-10 font-semibold text-6xl
          text-white mt-[7%] border-2 bg-black opacity-50">
             Model 3
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
                  <SpeedIcon className="scale-[60%] sm:scale-[110%] 
                   sm:mr-1 sm:mb-2" fontSize="large"/>3.1 s <br/>
                  <h1 className="text-xs">0-60 mph*</h1>
               </span>
               <span>358 mi <br/>
                <h1 className="text-xs pt-[0.5rem]">Range (EPA est.)</h1>
               </span>
               <span>AWD<br/>
                <h1 className="text-xs pt-[0.5rem]">Dual Motor</h1>  
               </span>
            </div>  
            <div className="flex justify-center">
              <h1 className="border-[0.16rem] pt-1 pb-2 mt-7 rounded font-semibold
               w-[22rem] cursor-pointer hover:bg-white hover:text-black hover:border-black
               sm:w-[24rem] md:w-[16rem] h-[2.8rem] md:mt-0">
                Order Now
              </h1>
            </div>  
               
          </div>  
         
         </div> 
         <div className="">
          <Image
              src="https://images.unsplash.com/photo-1619572945516-7598cb601a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
              layout="fill"
              alt=""
              className="object-cover"
          />  
         </div>
         <div className="absolute z-10 bottom-3 cursor-pointer flex justify-center
          w-[100%]">
           <KeyboardArrowDownIcon fontSize="large" className=""/>
         </div>
       </div>  
        
    </div>
  )
}

export default model3


// https://images.unsplash.com/photo-1619572945516-7598cb601a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80


// "https://images.unsplash.com/photo-1642569135400-9e09b38dc200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80