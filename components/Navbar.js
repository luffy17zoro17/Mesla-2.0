import React from 'react'

const Navbar = () => {
  return (   
 
 <div className="flex items-center text-white absolute z-10 py-3
      w-[100%]">
    <div className="w-[100%] font-bold text-lg pl-[3rem]">
      M E S L A
    </div>
    
    <div className="hidden lg:space-x-9 lg:absolute lg:font-medium lg:flex
     lg:justify-center lg:w-[100%]">
      <div className="hover:rounded-xl hover:bg-gray-400">Model X</div>
      <div className="hover:rounded-xl hover:bg-gray-400">Model S</div>
      <div className="hover:rounded-xl hover:bg-gray-400">Model Y</div>
      <div className="hover:rounded-xl hover:bg-gray-400">Model 3</div>
      <div className="hover:rounded-xl hover:bg-gray-400">Solar Panels</div>
      <div className="hover:rounded-xl hover:bg-gray-400">Solar Roof</div>
    </div> 
  
    <div className="space-x-9 absolute flex font-medium
     justify-end w-[100%] pr-[2.5rem]"> 
      <div className="hidden xl:flex xl:space-x-9">
       <div className="hover:rounded-xl hover:bg-gray-400">Shop</div>
       <div className="hover:rounded-xl hover:bg-gray-400">Account</div>
      </div> 
      <div className="hover:rounded-xl hover:bg-gray-400">Menu</div>
    </div> 
  
 </div> 

)
}

export default Navbar