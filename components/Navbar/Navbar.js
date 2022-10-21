import React from 'react'
import Link from 'next/link';




const Navbar= () => {

  
  return (
    
    <div className='fixed w-[100%] pt-5'>
    <div className="text-white flex border-4 border-orange-300 
    shadow-md shadow-yellow-800
      w-[100%] z-30 h-[3.6rem] top-0 right-0 bg-black rounded-lg">

       <ul className="flex items-center justify-around
        w-[100%] gap-[50%]"> 
        
         <ul className="w-[30%] left-[6vmin] xs:pl-7 text-lg font-bold tracking-[1rem] flex 
         justify-start absolute">
          <li className="pb-1 shadow-xl font-serif shadow-black hover:shadow-none">
            <Link href="/"><a>MESLA</a></Link>
          </li>
         </ul>
         
         <ul className="hidden justify-center items-center absolute font-semibold
          w-[50%] xl:flex">
           <li className="px-4 pb-0.5 hover:bg-green-500 rounded-lg hover:shadow-xl hover:shadow-black">
             <Link href="/modelx" as="modelx" rel="stylesheet preload prefetch">
              <a>Model X</a>
             </Link>
           </li> 
           <li className="px-4 pb-0.5 hover:bg-green-500 hover:rounded-lg hover:shadow-xl
           hover:shadow-black">
             <Link href="/model3" as="model3" rel="stylesheet preload prefetch">
              <a>Model 3</a>
             </Link>
           </li>
           <li className="px-4 pb-0.5 hover:bg-green-500 rounded-lg hover:shadow-xl hover:shadow-black">
             <Link href="/models" as="models" rel="stylesheet preload prefetch">
              <a>Model S</a>
             </Link>
           </li>
           <li className="px-4 pb-0.5 hover:bg-green-500 rounded-lg hover:shadow-xl hover:shadow-black">
             <Link href="/modely" as="modely" rel="stylesheet preload prefetch">
               <a>Model Y</a>
             </Link>
           </li>
           <li className="px-4 pb-0.5 hover:bg-green-500 rounded-lg hover:shadow-xl hover:shadow-black">
             <Link href="/solarroof" as="solarroof" rel="stylesheet preload prefetch">
               <a>Solar Roof</a>
             </Link>
           </li>
           <li className="px-4 pb-0.5 hover:bg-green-500 rounded-lg hover:shadow-xl hover:shadow-black">
             <Link href="/solarpanels" as="solarpanels" rel="stylesheet preload prefetch">
               <a>Solar Panels</a>
             </Link>
           </li>    
         </ul>
        
         <ul className="flex justify-end absolute right-[8rem] 
          font-semibold md:right-[0rem]">
            <li className="px-4 pb-0.5 cursor-pointer 
             hover:bg-green-500 hover:shadow-xl hover:shadow-black rounded-lg">
              <Link href="/shop" as="/shop"
               rel="stylesheet preload prefetch">
                <a>Shop</a>
              </Link>
            </li>
            <li className="px-4 pb-0.5 mr-[7rem] cursor-pointer hover:shadow-xl hover:shadow-black
             hover:bg-green-500 rounded-lg hidden md:flex">
              <Link href="/signin"><a>Account</a></Link>
            </li>
                     
         </ul>   
        
       </ul>
    </div>
    </div>
  )
}

export default Navbar
