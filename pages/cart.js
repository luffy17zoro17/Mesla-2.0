import React from 'react';
import Link from "next/link";
import Shopbar from "../components/Shopbar";

const cart = () => {
  return (
    <>
    <div className="absolute z-200 bg-black border-2 hover:bg-white
     h-[3.8rem] top-0 w-[100%]">
         <Shopbar/>
    </div>
    <div className="relative border h-screen w-[100%] flex 
    justify-center flex-col items-center lg:justify-start lg:top-[11rem]">
    <div className="border flex flex-col justify-center
      min-w-[80%] lg:justify-start"> 
        <h1 className="fixed text-3xl font-semibold w-[10rem]
         border-4 top-16 left-[4%] sm:left-[9%]">
          Cart
        </h1>
        <div className="relative border-4 h-[100%] border-green-500
         flex flex-col items-center justify-end lg:items-start">
          <h2 className="text-xl text-center border font-medium 
          mb-[5%] lg:mb-5">
            Your cart is empty. 
          </h2>  
          <div className="border-4 w-[100%]
           flex flex-col max-w-[27rem] gap-4 lg:flex-row lg:max-w-[42rem]">
           <div className="flex justify-center items-center 
           border text-center pb-1 h-[2.6rem] w-[100%]
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
          <div className="fixed bottom-1 text-center text-gray-700 text-xs
          tracking-wider font-bold h-[4rem] border space-y-3 sm:flex sm:space-y-0 
           sm:space-x-3 w-[80%] justify-center lg:bottom-1">
            <h1>Mesla © 2022</h1>
            <h2>Privacy & Legal</h2>
            <h3 className="hidden sm:flex">Locations</h3>
          </div>
        </div>
    </div>
    </div>
    </>
  )
} 

export default cart