import React, { useState } from 'react';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import PublicTwoTone from '@mui/icons-material/PublicTwoTone';



const menuItems = [
   
      {id:1, name:"Existing Inventory"},
      {id:2,name:"Used Inventory"},
      {id:3,name:"Trade-In"},
      {id:4,name:"Test Drive"},
      {id:5,name:"Insurance"},
      {id:6,name:"Cybertruck"},
      {id:7,name:"Roadster"},
      {id:8,name:"Semi"},
      {id:9,name:"Charging"},
      {id:10,name:"Powerwall"},
      {id:11,name:"Commercial Energy"},
      {id:12,name:"Utilities"},
      {id:13,name:"Find Us"},
      {id:14,name:"Support"},
      {id:15,name:"Investor Relations"},
]


const Menu = () => {

  

  return (
    <div className="fixed z-10 h-[47.6rem] flex flex-col justify-center 
       items-center top-0 right-0 bg-black border w-[20rem] pt-14">
      <div className=" space-y-[0.7rem]">
      {menuItems.map((items)=>
        <div key={items.id}>
         <div className="w-[16rem]"> 
          <h1 className="hover:bg-gray-700 cursor-pointer 
           rounded pb-1 pl-5">
            {items.name}
          </h1>
         </div> 
        </div>
      )}
      </div>
      <span className="flex rounded mt-5 justify-start items-center 
        w-[16rem] hover:bg-gray-600 pb-2 pl-[1.1rem]">
        <PublicTwoToneIcon className="mb-2 mr-2"/>
        <div className="tracking-wider">
            India
            <h2 className="text-xs font-bold tracking-widest 
              hover:underline cursor-pointer">
              English
            </h2>
        </div>
      </span>
      
    </div>
  )
}

export default Menu