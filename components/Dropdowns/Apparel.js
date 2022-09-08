import React from 'react'



const Categories = [
   
        {
         id:1,
         type:"Men",
        },
        {
         id:2,
         type:"Women",
        },
        {
         id:3,
         type:"Kids",  
        },
      
]
      
      
const ApparelTypes = [    
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



const Apparel = () => {
  return (
   <div className="fixed justify-center flex">
    <div className="absolute text-black ml-[5rem] bg-white
      w-screen  flex justify-evenly h-[28rem] pt-[60%]">
       {Categories.map((category)=>(
         
          <div className="" key={category.id}>
            <ul className="">
             <li className="font-semibold text-lg pb-[3%]">{category.type}</li>  
             <li className="pb-[14%]"><hr className="bg-gray-400 w-[15rem] h-[0.3rem]"/></li>
             <li>{ApparelTypes.map((apparels)=>(
               <div key={apparels.id}>
                  <div>{apparels.name}</div>
               </div>
              ))}
             </li>               
            </ul>
          </div>
       ))}
    </div>
   </div>
  )
}

export default Apparel