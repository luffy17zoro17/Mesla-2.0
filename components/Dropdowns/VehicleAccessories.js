import React from 'react'



const AccessoryTypes = [
   
        {
         id:1,
         type:"Model S",
        },
        {
         id:2,
         type:"Model 3",
        },
        {
         id:3,
         type:"Model X",  
        },
        {
         id:4,
         type:"Model Y",   
        }, 

]
      
      
const Accessories = [    
        {   
          id:1,   
          name:"Best Sellers"
        },
        {
          id:2, 
          name:"Interior",
        },
        {
          id:3, 
          name:"Exterior",
        },
        { 
          id:4, 
          name:"Wheels and Tires",
        },
        { 
          id:5, 
          name:"Floor Mats",
        },
        { 
          id:6, 
          name:"Parts",
        },
        { 
          id:7, 
          name:"Keys", 
        },        

]    



const VehicleAccessories = () => {
  return (
 
   
    <div className="fixed bg-gray-800 text-white
      flex justify-evenly w-[100%] ml-[5.1rem] py-[5%] h-[26rem]">
       {AccessoryTypes.map((access)=>(
         
          <div className="" key={access.id}>
            <ul className="">
             <li className="font-semibold text-lg pb-[3%]">
              {access.type}
             </li>  
             <li className="pb-[14%]"><hr className="bg-gray-400 w-[15rem]
              h-[0.3rem]"/></li>
             <li>{Accessories.map((accessory)=>(
               <div key={accessory.id}>
                  <div className="">
                    {accessory.name}
                  </div>
               </div>
              ))}
             </li>               
            </ul>
          </div>
       ))}
    </div>
   
   
  )
}

export default VehicleAccessories