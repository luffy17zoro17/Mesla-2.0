import Image from 'next/image'
import React from 'react'

import Navbar from '../components/Navbar';
import SpeedIcon from '@mui/icons-material/Speed';


const modelx = () => {

  return (
    <div>
       <div className="h-[3.6rem] absolute z-10 w-[100%] border bg-black opacity-75
        rounded-br-xl">
         <Navbar/>
       </div>
       
       
       <div className="absolute h-[100%] w-[100%] flex flex-col text-center 
       justify-between items-center border">
        
         <div className="absolute w-[100%] z-10 font-semibold text-6xl
          text-white mt-[5rem] border bg-black opacity-75">
             Model X
             <h1 className="text-[1.2rem] font-normal tracking-wide pb-1 pt-3">Plaid</h1> 
         </div>   
          
         <div className="absolute z-10 flex flex-col
             text-white bottom-0 h-50
            py-9 w-[100%] rounded-tl-xl rounded-br-xl bg-black 
            opacity-75">

          <div className="flex flex-col h-[20%] mb-[2rem]
           justify-center lg:flex-row">
    
            <div className="flex text-xl font-semibold justify-center
             sm:text-3xl">
               
               <span className="w-[8rem]">333mi <br/>
                <h1 className="text-xs pt-[0.5rem]">Range (EPA est.)</h1>
               </span>
               <span className="flex w-[8rem] flex-col items-center">
                  <h2 className="h-2"><SpeedIcon className="scale-[60%] sm:scale-[100%]" 
                  fontSize="large"/>
                  2.5s</h2><br/>
                  <h1 className="text-xs pl-2">0-60 mph*</h1>
               </span>
               <span className="w-[8rem]">9.9s<br/>
                <h1 className="text-xs pt-[0.5rem]">1/4 Mile</h1>  
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
              src="https://images.unsplash.com/photo-1563720360263-0dafca427881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              layout="fill"
              alt=""
              className="object-cover"
          />  
         </div>
       </div>  
        
    </div>
  )
}

export default modelx