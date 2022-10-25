import React from 'react';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import Link from "next/link";



const menuItems = [
      {id:1,name:"Model S",link:"/models"},
      {id:2,name:"Model 3",link:"/model3"},
      {id:3,name:"Model X",link:"/modelx"},
      {id:4,name:"Model Y",link:"/modely"},
      {id:5,name:"Solar Roof",link:"/solarroof"},
      {id:6,name:"Solar Panels",link:"/solarpanels"},
      {id:7, name:"Existing Inventory",link:""},
      {id:8,name:"Used Inventory",link:""},
      {id:9,name:"Trade-In",link:""},
      {id:10,name:"Test Drive",link:""},
      {id:11,name:"Insurance",link:""},
      {id:12,name:"Cybertruck",link:""},
      {id:13,name:"Roadster",link:""},
      {id:14,name:"Semi",link:""},
      {id:15,name:"Charging",link:""},
      {id:16,name:"Powerwall",link:""},
      {id:17,name:"Commercial Energy",link:""},
      {id:18,name:"Utilities",link:""},
      {id:19,name:"Find Us",link:""},
      {id:20,name:"Support",link:""},
      {id:21,name:"Investor Relations",link:""},
]


const Menu = () => {


  return (
    <>
    
    <div className="top-0 right-0 fixed z-30 h-[100%] shadow-lg
      shadow-violet-500 bg-black w-[21rem]">
    <div className="w-[18rem] h-[7rem] bg-black z-50 fixed right-5 top-0"></div>
    <div className="text-white flex flex-col justify-center h-[100%]
         overflow-y-auto overflow-visible fixed z-30 right-0 top-0 items-center
         bg-black font-semibold w-[20rem]">
      <div className="min-h-[10%] pt-[7rem]">
      <div className="space-y-4">
      {menuItems.map((items)=>
        <div key={items.id}>
         <div className="w-[15.3rem]"> 
          <h1 className={`pl-5 hover:bg-gray-700 hover:py-[0.1rem] cursor-pointer 
           rounded h-8 ${items.id>0 && items.id<7 ? "lg:hidden" : "flex"}`}>
            <Link className="" href={items.link}><a>{items.name}</a></Link>
          </h1>
         </div> 
        </div>
      )}
      </div>
      <div className="pb-[7rem]">
      <span className="flex rounded mt-5 py-1 pb-2 justify-start items-center 
        w-[16rem] hover:bg-gray-600 pl-[1.1rem]">
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
      </div>
      
    </div>
    </div>
  
    </>
  
  );
}

export default Menu