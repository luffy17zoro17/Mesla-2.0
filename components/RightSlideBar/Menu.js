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
   
    <div className="text-white flex flex-col justify-center 
       items-center top-[-3.3rem] right-0 bg-black font-semibold
        w-[20rem] pt-[6rem]">
      <div className="right-5 
      w-[17rem] top-0 bg-black fixed
      h-[7rem]">
      </div>    
      <div className="space-y-[1rem] pt-[1rem] lg:pt-[0rem]">
      {menuItems.map((items)=>
        <div key={items.id}>
         <div className="w-[16rem]"> 
          <h1 className={`pl-5 pb-1 hover:bg-gray-700 cursor-pointer 
           rounded h-7 ${items.id>0 && items.id<7 ? "lg:hidden" : "flex"}`}>
            <Link className="" href={items.link}><a>{items.name}</a></Link>
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
  
  );
}

export default Menu