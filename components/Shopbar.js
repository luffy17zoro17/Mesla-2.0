import React from 'react'
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';
import VehicleAccessories from "./Dropdowns/VehicleAccessories"
import Apparel from './Dropdowns/Apparel';
import { Button } from '@mui/material';



const Shopbar= () => {

  const [isHovering, setIsHovering] = useState(false);


  return (
    <div className="text-white flex max-w-screen border-pink-300
      w-[100%] absolute z-10 border-4 h-[3.5rem] hover:bg-gray-800">
       <ul className="flex items-center justify-around
        w-[100%] gap-[50%]"> 
        
         <ul className="w-[30%] pl-7 text-lg font-bold flex gap-[1rem] 
          justify-start items-center">
          <li className="tracking-[1rem] pb-1">
            <Link href="/"><a>MESLA</a></Link>
          </li>
           <h1><hr className="w-[0.02rem] bg-white pt-4 border"/></h1>
          <li className="pb-1">Shop</li>
         </ul>
         
         <ul className="hidden justify-center items-center absolute font-semibold
          xl:flex">
           <li className="px-4 pb-1 hover:bg-gray-400 rounded-lg">
             <Link href="/right/shop" as="/right/shop" rel="stylesheet preload prefetch">
              <a>Charging</a>
             </Link>
           </li> 

           <div className="group">
           <div className="px-4 pb-1 hover:bg-gray-400 rounded-lg">
              <Link href="/right/shop" as="/right/shop"
                rel="stylesheet preload prefetch">  
                <a>Vehicle Accessories</a>
              </Link>  
           </div>
           <div className="hidden group-hover:flex"> 
                <VehicleAccessories/>  
           </div>
           </div>

           <div className="group">
           <div className="px-4 pb-1 hover:bg-gray-400 rounded-lg">
              <Link href="/right/shop" as="/right/shop" 
               rel="stylesheet preload prefetch">
                <a>Apparel</a>
              </Link>          
           </div>
           <div className="hidden group-hover:flex"> 
                <Apparel/>  
           </div>
           </div>

           <div>
           <div className="px-4 pb-1 hover:bg-gray-400 rounded-lg">
             <Link href="/right/shop" as="/right/shop" rel="stylesheet preload prefetch">
               <a>Lifestyle</a>
             </Link>
           </div>   
           
           </div>
         </ul>
        
         <ul className="flex justify-end pr-1 gap-[0.7rem] font-semibold w-[18%]">
            <li className="pb-1"><SearchIcon/></li>
            <li className="pb-1"><ShoppingCartIcon/></li>
            <li className="px-4 mb-1 bg-gray-400 opacity-[0.9rem] rounded-lg hover:bg-gray-500 
             cursor-pointer xl:bg-transparent">
              <Link href="/right/menu"><a>Menu</a></Link>
            </li>
         </ul>   
        
       </ul>
    </div>
  )
}

export default Shopbar
