import React from 'react'
import Link from 'next/link';







const Navbar= () => {

  

  return (
    <div className="text-white flex max-w-screen
      w-[100%] h-[3.5rem]">
       <ul className="flex items-center justify-around
        w-[100%] gap-[50%]"> 
        
         <ul className="w-[30%] pl-7 text-lg font-bold tracking-[1rem] flex 
         justify-start">
          <li className="pb-1">
            <Link href="/"><a>MESLA</a></Link>
          </li>
         </ul>
         
         <ul className="hidden justify-center items-center absolute font-semibold
          w-[50%] xl:flex">
           <li className="px-4 pb-1 hover:bg-gray-400 rounded-lg">
             <Link href="/modelx" as="modelx" rel="stylesheet preload prefetch">
              <a>Model X</a>
             </Link>
           </li> 
           <li className="px-4 pb-1 hover:bg-gray-400 rounded-lg">
             <Link href="/model3" as="model3" rel="stylesheet preload prefetch">
              <a>Model 3</a>
             </Link>
           </li>
           <li className="px-4 pb-1 hover:bg-gray-400 rounded-lg">
             <Link href="/models" as="models" rel="stylesheet preload prefetch">
              <a>Model S</a>
             </Link>
           </li>
           <li className="px-4 pb-1 hover:bg-gray-400 rounded-lg">
             <Link href="/modely" as="modely" rel="stylesheet preload prefetch">
               <a>Model Y</a>
             </Link>
           </li>
           <li className="px-4 pb-1 hover:bg-gray-400 rounded-lg">
             <Link href="/solarroof" as="solarroof" rel="stylesheet preload prefetch">
               <a>Solar Roof</a>
             </Link>
           </li>
           <li className="px-4 pb-1 hover:bg-gray-400 rounded-lg">
             <Link href="/solarpanels" as="solarpanels" rel="stylesheet preload prefetch">
               <a>Solar Panels</a>
             </Link>
           </li>    
         </ul>
        
         <ul className="flex justify-end ml-[11rem] font-semibold w-[18%]">
            <li className="px-4 pb-1 cursor-pointer
             hover:bg-gray-400 rounded-lg hidden xl:flex">
              <Link href="/right/shop" as="/right/shop"
               rel="stylesheet preload prefetch">
                <a>Shop</a>
              </Link>
            </li>
            <li className="px-4 pb-1 mr-[7rem] cursor-pointer
             hover:bg-gray-400 rounded-lg hidden xl:flex">
              <Link href="/signin"><a>Account</a></Link>
            </li>
            
               
         </ul>   
        
       </ul>
    </div>
  )
}

export default Navbar
