import React from 'react'

import Image from 'next/image'






const lifestyleTypes = [
  {
    id:1,
    name:"Best Sellers",
  },
  {
    id:2,
    name:"Mini Teslas",
  },
  {
    id:3,
    name:"Drinkware",
  },
  {
    id:4,
    name:"Outdoor & Tech",
  },
  {
    id:5,
    name:"Gift Card",
  }
]



const Lifestyle = () => {

  return (
 
  
    <div className="fixed bg-gray-800 text-white h-[26.8rem]
      flex justify-evenly w-[100%] mr-[22.4rem] py-[5%]">
       <div className="flex flex-wrap gap-[5%]">
       {lifestyleTypes.map((lifetype)=>(
         
          <div className="" key={lifetype.id}>
           <div className=""> 
            <ul className="">
             <li className="font-semibold text-lg pb-[3%]">
               {lifetype.name}
             </li>  
             <li className="pb-[14%]">
               <hr className="bg-gray-400 w-[10rem] h-[0.3rem]"/>
             </li>               
            </ul>
           </div> 
          </div>
       ))}
       </div>
       <div className="text-center">
       <Image 
         src="https://images.unsplash.com/photo-1637070155805-e6fbee6ec2cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1798&q=80"
         layout="fixed"
         alt=""
         height={250}
         width={400}
         className="object-cover relative"
       />
       <h2 className="text-sm font-bold fixed z-40 top-[35%] 
        right-[20%] opacity-[0.5]
        text-black -rotate-[9deg]">
         M E S L A
       </h2>
       <h1 className="text-3xl font-semibold pt-4 pb-5">Mesla Shopping Gift Card</h1>
       </div>
    </div>
   
   
  )
}

export default Lifestyle