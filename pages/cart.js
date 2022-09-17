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
    <div className="h-screen w-[100%] flex
    justify-center flex-col items-center lg:justify-start lg:top-[11rem]">
      <h1 className="absolute text-3xl top-[6rem] font-semibold flex 
      justify-start w-[90%] sm:w-[70%] md:w-[60%] lg:w-[90%] xl:w-[75%]">
        Cart
      </h1>
    <div className="flex flex-col absolute
      min-w-[80%] lg:justify-start lg:top-[11rem] lg:left-[15%]"> 
        
        <div className="h-[100%] flex flex-col items-center justify-end lg:items-start">
          <h2 className="text-xl text-center font-medium 
          mb-[5%] lg:mb-5">
            Your cart is empty. 
          </h2>  
          <div className="w-[100%]
           flex flex-col max-w-[27rem] gap-4 lg:flex-row lg:max-w-[42rem]">
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
            <Link href="">
                <a>
                  Sign In
                </a>
            </Link>
           </div> 
          </div>
          
        </div>
    </div>
    </div>
    <div className=" absolute bottom-4 text-gray-700 flex justify-center items-center 
    text-xs font-bold w-[100%]">
         <span className="flex flex-col text-center leading-8 
         pb-5 sm:flex-row
          sm:space-x-5">
            <span>Mesla © 2022</span>
            <span>Privacy & Legal</span>
            <span className="hidden sm:flex">Locations</span>
         </span>   
    </div>
    </>
  )
} 

export default cart