import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar';
import SpeedIcon from '@mui/icons-material/Speed';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const modely = () => {
    return (
      <div>
         <div className="bg-black rounded-br-xl opacity-75 absolute z-10
         w-[100%] h-[3.6rem]"><Navbar/></div>
         
         
         <div className="absolute flex flex-col text-center justify-between min-w-[100%] 
           min-h-[100%]">
          
           <div className="absolute opacity-75 w-[100%] bg-white z-10 font-semibold 
           text-6xl border-2 border-black
            text-gray-700 mt-[6rem]">
               Model Y
           </div>     
           <div className="absolute z-10 flex flex-col
            items-center text-white bottom-0 h-50
            py-9 w-[100%] rounded-tl-xl rounded-br-xl bg-black 
            opacity-75">
  
            <div className="flex flex-col h-[20%] w mb-[2rem] 
             justify-end md:flex-row md:justify-center">
      
              <div className="flex justify-evenly text-xl font-semibold
               space-x-6 sm:text-3xl
               md:space-x-[3rem]">
                 <span>
                    <SpeedIcon className="scale-[60%] sm:scale-[110%] 
                     sm:mr-1 sm:mb-2" fontSize="large"/>76 cu ft <br/>
                    <h1 className="text-xs">Cargo Space</h1>
                 </span>
                 <span>330 mi <br/>
                  <h1 className="text-xs pt-[0.5rem]">Range (EPA est.)</h1>
                 </span>
                 <span>AWD<br/>
                  <h1 className="text-xs pt-[0.5rem]">Dual Motor</h1>  
                 </span>
              </div>  
              <div className="flex justify-center">
                <h1 className="border-[0.16rem] pt-1 pb-2 mt-7 rounded font-semibold
                 w-[22rem] sm:w-[24rem] md:w-[16rem] h-[2.8rem] md:mt-0 md:ml-[3rem]
                  hover:border-black
                 hover:bg-white hover:text-black cursor-pointer">
                  Order Now
                </h1>
              </div>  
                 
            </div>  
           
           </div> 
           <div className="">
            <Image
                src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                layout="fill"
                alt=""
                className="object-cover"
            />  
           </div>
           <div className="absolute z-10 bottom-3 cursor-pointer flex justify-center
            w-[100%]">
             <KeyboardArrowDownIcon fontSize="large" className=""/>
           </div>
         </div>  
          
      </div>
    )
  }
  
  export default modely



