import React from 'react'
import Link from 'next/link';

const Navbar= () => {
  return (
    <div className="text-white flex max-w-screen border-pink-300
      w-[100%] absolute z-10 border-4 h-[3.5rem]">
       <ul className="flex items-center justify-around
        w-[100%] gap-[50%]"> 
        
         <ul className="w-[30%] pl-7 text-lg font-bold tracking-[1rem] flex 
         justify-start">
          <li>
            <Link href="/"><a>MESLA</a></Link>
          </li>
         </ul>
         
         <ul className="hidden justify-center items-center absolute font-semibold
          w-[50%] xl:flex">
           <li className="px-4 hover:bg-gray-400 rounded-lg">
             <Link href="/modelx"><a>Model X</a></Link>
           </li> 
           <li className="px-4 hover:bg-gray-400 rounded-lg">
             Model 3
           </li>
           <li className="px-4 hover:bg-gray-400 rounded-lg">
             Model S
           </li>
           <li className="px-4 hover:bg-gray-400 rounded-lg">
             Model Y
           </li>
           <li className="px-4 hover:bg-gray-400 rounded-lg">
             Solar Roof
           </li>
           <li className="px-4 hover:bg-gray-400 rounded-lg">
             Solar Panels
           </li>
        
         </ul>
        
         <ul className="flex justify-end pr-1 font-semibold w-[18%]">
            <li className="px-4 cursor-pointer hover:bg-gray-400 rounded-lg hidden xl:flex">
              <Link href="/shop"><a>Shop</a></Link></li>
            <li className="px-4 cursor-pointer hover:bg-gray-400 rounded-lg hidden xl:flex">Account</li>
            <li className="px-4 bg-gray-400 opacity-[0.9rem] rounded-lg hover:bg-gray-500 
             cursor-pointer xl:bg-transparent">Menu</li>
         </ul>   
        
       </ul>
    </div>
  )
}

export default Navbar
