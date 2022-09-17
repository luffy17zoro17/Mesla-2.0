import React from 'react';
import Image from 'next/image'






const typesAndparts = [
  {
    id:1,
    name:"At Home",
  },
  {
    id:2,
    name:"On The Road"
  },
  {
    id:3,
    name:"Parts"
  }
]



const Charging = () => {

  return (
 
  
    <div className="fixed bg-gray-800 text-white h-[26.8rem]
      flex justify-evenly w-[100%] ml-[22rem] py-[5%]">
       {typesAndparts.map((typart)=>(
         
          <div className="" key={typart.id}>
            <ul className="">
             <li className="font-semibold text-lg pb-[3%]">
              {typart.name}
             </li>  
             <li className="pb-[14%]"><hr className="bg-gray-400 w-[15rem] h-[0.3rem]"/>
             
             </li>               
            </ul>
          </div>
       ))}
       <div className="text-center">
       <Image 
         src="https://images.unsplash.com/photo-1646752995274-6169c69ed7b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
         layout="fixed"
         alt=""
         height={250}
         width={400}
         className="object-cover"
       />
       <h1 className="text-3xl font-semibold pt-4 pb-5">Wall Connector</h1>
       </div>
    </div>
   
   
  )
}

export default Charging