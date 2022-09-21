import React from 'react';
import Link from "next/link";
import Shopbar from "../components/Shopbar";

const cart = () => {
  return (
    
    <>
    
    <div className="absolute z-200 bg-black hover:bg-white
     h-[3.8rem] top-0 w-[100%]">
         <Shopbar/>
    </div>
    
    <h1 className="w-[100%] fixed top-[13%] text-3xl font-semibold flex 
      justify-end right-[83%] lg:right-[89%]">
        Cart
    </h1>
    
    <h2 className='fixed text-2xl top-[30%] flex justify-center 
     w-[100%] lg:top-[30%] lg:justify-start lg:left-[10%]'>
        Your cart is empty. 
    </h2>  
    <div className='fixed w-[100%] border flex justify-center lg:justify-start lg:left-[10%]'>
    <div className="w-[100%] flex justify-center fixed top-[40%]
     flex-col max-w-[27rem] gap-4 lg:flex-row lg:max-w-[42rem]">
           <div className="flex justify-center items-center 
           text-center pb-1 h-[2.6rem] w-[100%]
            rounded bg-blue-400 text-white hover:bg-blue-500"> 
            <Link href="/right/shop">
                <a>Continue Shopping</a>
            </Link>
           </div>
           <div className="border-[0.15rem] h-[2.6rem] border-black 
           w-[100%] flex justify-center items-center
           text-center rounded hover:bg-black hover:text-white">
            <Link href="/signin">
                <a>
                  Sign In
                </a>
            </Link>
           </div> 
    </div>
    </div>
          
    
    
    
    <div className="z-20 absolute bottom-3 w-[100%] flex justify-center text-center
     text-xs">     
          
          <p className='ml-3 text-center flex flex-col justify-center space-x-0 sm:space-x-5
                sm:flex-row sm:ml-1'>
               <span>Mesla © 2022</span>
               <span>Privacy & Legal</span>
               <span className='hidden sm:flex'>Locations</span>
          </p>
                     
    </div>
    </>
  )
} 

export default cart