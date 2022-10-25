import Image from 'next/image'
import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar';

import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Menu from '../components/Menu';
import BgBlur from '../components/BgBlur';




const Modely = () => {

  const [isShow,setIsShow] = useState(false);


  const handleToggle = () => {

     setIsShow(!isShow);
  }



  return (
    <div>
      <>
      <div className="sticky top-0 right-0 z-30">
       <div className=''><Navbar/></div>
     </div> 
  
      <button onClick={handleToggle} className={`overflow-y-hidden px-4 pb-0.5
        bg-gray-400 opacity-[0.9rem] rounded-lg hover:bg-gray-500 
        cursor-pointer absolute z-30 right-4 top-[0.2rem] 
        m-3 bg-transparent text-white shadow shadow-red-500 
        xl:shadow-green-300`}>
         Menu
      </button>
      {isShow ?
      (
        <>   
           <BgBlur/> 
           <Menu/>
           
         
         <button onClick={handleToggle} className="absolute z-50 top-7 right-11">
            <CancelPresentationIcon 
              className="text-white p-[0.2rem]
             hover:bg-gray-600 rounded scale-[1.5]"/>
         </button>
        </>
      ) : (<div></div>)}
         
          
           <div className="absolute opacity-75 w-[100%] bg-white z-10 font-semibold text-center
           text-6xl border-2 border-black
            text-gray-700 top-[5rem]">
               Model Y
           </div>    

           <>
           <div className="flex flex-col absolute z-10 text-white bg-black py-5
            opacity-75 bottom-0 w-[100%] lg:flex lg:flex-row lg:justify-center lg:items-center">
            <div className="flex h-[4rem] justify-evenly font-semibold text-lg lg:flex-row 
             lg:items-evenly lg:space-x-[5rem] lg:my-7">
               
               <span className="text-center flex flex-col justify-between">
                 <span className="sm:text-3xl">76 cu ft</span> 
                 <span className="font-light text-xs sm:text-[0.85rem]">Cargo Space</span>
               </span>
               <span className="text-center flex flex-col items-center justify-between">
                  <span className="flex sm:text-3xl">
                    330 mi
                  </span>
                  <span className="font-light text-xs sm:text-[0.85rem]">Range (EPA est.)</span>
               </span>
               <span className="text-center flex flex-col justify-between">
                 <span className="sm:text-3xl">9.9s</span>
                 <span className="font-light text-xs sm:text-[0.85rem]">1/4 Mile</span>  
               </span>
    
            </div>  
            <div className="cursor-pointer 
             border-2 h-[3rem] mx-[10%] mt-5 mb-5 flex items-center rounded-md 
             justify-center sm:mx-[30%] lg:mx-[0%] lg:px-[5%]
              lg:ml-[5rem] lg:mb-[2.1rem] hover:border-black 
             hover:bg-white hover:text-black">     
                Order Now   
            </div>  
           </div> 
          </>     
       
         
        
         <div>
          <Image
              src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              layout="fill"
              alt=""
              className="object-cover"
          />  
         </div>
      </>
    </div>
    );
}
  
export default Modely



