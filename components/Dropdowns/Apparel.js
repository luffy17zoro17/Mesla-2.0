import Image from 'next/image'
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
          name:"Best Sellers",
          name2:"Best Sellers",
        },
        {
          id:2, 
          name:"Tees",
          name2:"Tees",
        },
        {
          id:3, 
          name:"Sweatshirts and Hoodies",
          name2:"Onesies",
        },
        { 
          id:4, 
          name:"Outerwear",
          name2:"Outerwear",
        },
        { 
          id:5, 
          name:"Joggers",
          name2:"Hats",
        },
        { 
          id:6, 
          name:"Hats",
          name2:"Socks",
        },
        { 
          id:7, 
          name:"Socks", 
          name2:"",
        },        

]    


const ApparelTypes2 = [
        {   
          id:1,   
          name:"Best Sellers"
        },
        {
          id:2, 
          name:"Tees",
        },
        {
          id:3, 
          name:"Onesies",
        },
        { 
          id:4, 
          name:"Outerwear",
        },
        { 
          id:5, 
          name:"Hats",
        },
        { 
          id:6, 
          name:"Socks",
        },
]



const Apparel = () => {
  return (
  
    <div className="fixed bg-gray-800 justify-evenly
      w-[100%] flex text-white py-[5%] mr-[11.1rem] h-[26.7rem]">
       {Categories.map((category)=>(
         
          <div className="" key={category.id}>
            <ul className="">
             <li className="font-semibold text-lg pb-[3%]">{category.type}</li>  
             <li className="pb-[14%]"><hr className="bg-gray-400 w-[15rem] h-[0.3rem]"/></li>
             <li>{ApparelTypes.map((apparels)=>(
               <div key={apparels.id}>
                  <div>
                   {category.id === 3 ? apparels.name2 : apparels.name}           
                  </div>      
               </div>
              ))}
             </li>               
            </ul>
          </div>
       ))}
       <div className="text-center">
       <Image
          src="https://images.unsplash.com/photo-1557851114-3f672a50722a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80"
          layout="fixed" 
          height={250}
          width={400}
          className="object-cover"
          alt="" 
       />
       <h1 className="text-3xl pt-4 pb-5 font-semibold">Chill Pullover Hoodie</h1>
       </div>
    </div>
   
  )
}

export default Apparel