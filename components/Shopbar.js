import React from 'react';

import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

import {useState} from 'react';
import VehicleAccessories from "./Dropdowns/VehicleAccessories"
import Apparel from './Dropdowns/Apparel';

import Charging from './Dropdowns/Charging';
import Lifestyle from './Dropdowns/Lifestyle';

import SearchBar from './Searchbar/SearchBar';
import BgBlur from './BgBlur';
import InnerMenu from './RightSlideBar/InnerMenu';





const Shopbar= () => {

  const [isVisible, setIsVisible] = useState(false);


  const handleToggle = () => {

    setIsVisible(!isVisible);
     
  }
  


  return (
    <div className="text-white flex max-w-screen border-pink-300
      w-[100%] absolute z-10 h-[3.5rem] hover:bg-gray-800">
       <ul className="flex items-center justify-around
        w-[100%] gap-[50%]"> 
        
         <ul className="w-[30%] pl-7 text-lg font-bold flex gap-[1rem] 
          justify-start items-center">
          <li className="tracking-[1rem] pb-1">
            <Link href="/"><a>MESLA</a></Link>
          </li>
           <h1><hr className="w-[0.02rem] bg-white pt-4 border"/></h1>
          <li className="pb-1">
            <Link href="/right/shop"><a>Shop</a></Link>
          </li>
         </ul>
         
         <ul className="hidden justify-center items-center absolute font-semibold
           xl:flex">
           <div className="group"> 
           <div className="px-4 pb-1 hover:bg-gray-400 rounded-lg">
             <Link href="/right/shop" as="/right/shop" 
              rel="stylesheet preload prefetch">
              <a>Charging</a>
             </Link>
           </div> 
           <div className="hidden group-hover:flex justify-center">
              <Charging/>
           </div>
           </div>

           <div className="group">
           <div className="px-4 pb-1 hover:bg-gray-400 rounded-lg">
              <Link href="/right/shop" as="/right/shop"
                rel="stylesheet preload prefetch">  
                <a>Vehicle Accessories</a>
              </Link>  
           </div>
           <div className="hidden group-hover:flex justify-center"> 
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
           <div className="hidden group-hover:flex justify-center"> 
                <Apparel/>  
           </div>
           </div>

           <div className="group">
           <div className="px-4 pb-1 hover:bg-gray-400 rounded-lg">
             <Link href="/right/shop" as="/right/shop" 
              rel="stylesheet preload prefetch">
               <a>Lifestyle</a>
             </Link>
           </div>   
           <div className="hidden group-hover:flex justify-center">
              <Lifestyle/>
           </div>
           </div>
         </ul>
        
         <ul className="flex items-center justify-end pr-1 gap-[0.7rem] font-semibold 
         w-[18%]">
          
            <li className="pb-1 hover:cursor-pointer focus:border-2
             focus:border-white">
               <div className="z-10"><SearchBar/></div>
              <Link href="/cart"><ShoppingCartIcon/></Link>
            </li>
            <li className="px-4 pb-1 bg-gray-400 opacity-[0.9rem] rounded-lg 
            hover:bg-gray-500 cursor-pointer xl:bg-transparent">
              <button onClick={handleToggle}>
                Menu
              </button>
              {isVisible ?
              (<div>
                <div className="">
                  <InnerMenu/>
                  <div className="absolute left-0 top-0 
                   w-[100%]">
                    <BgBlur/>
                  </div>
                </div>
                <button onClick={handleToggle}>
                   <CancelPresentationIcon 
                     className="fixed top-7 right-7 z-10 p-[0.2rem]
                    hover:bg-gray-600 rounded scale-[1.5]"/>
                </button>
               </div>) : (<div></div>)}
            </li>
         </ul>   
        
       </ul>
    </div>
  );
};



export default Shopbar
