import React from 'react';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';




const menuItems=[
{
 id:1,name:"Charging",link:"",value:{
  id:1,name:"At Home",picurl:"",
  id:2,name:"On the Road",picurl:"",
  id:3,name:"Parts",picurl:"",
 }
},
{
 id:2,name:"Vehicle Accessories",link:"",value:{
   id:1,name:"Model S",picurl:"",
   id:2,name:"Model 3",picurl:"",
   id:3,name:"Model X",picurl:"",
   id:4,name:"Model Y",picurl:"",
 },
},
{
id:3,name:"Apparel",link:"",value:{
  id:1,name:"Men",picurl:"",
  id:2,name:"Women",picurl:"",
  id:3,name:"Kids",picurl:""
}
},
{
id:4,name:"Lifestyle",link:"",value:{
  id:1,name:"Best Sellers",picurl:"",
  id:2,name:"Mini Teslas",picurl:"",
  id:3,name:"Drinkware",picurl:"",
  id:4,name:"Outdoor & Tech",picurl:"",
  id:5,name:"Gift Card",picurl:""
}
},

]



const InnerMenu = () => {

  return (
    <div className="absolute z-10 h-screen flex flex-col justify-start
       items-center top-0 right-0 bg-black w-[20rem] pt-14 lg:pt-0">
      <div className="pt-[1rem] space-y-[0.7rem]">
       <div className="fixed mt-[0.9rem] px-2 text-black z-10"><SearchIcon/></div>
        <div className="pb-3 lg:hidden">
          <input className="relative text-black rounded w-[16rem] pt-1 pl-9 pb-2"
         placeholder="Search"/>
        </div>
       {menuItems.map((items)=>
        <div key={items.id}>
         <div className="w-[16rem]"> 
          <div className="hover:bg-gray-700 cursor-pointer 
           rounded pb-1 pl-5">
            <div>
              <a className={items.id >0 && items.id<5 && "lg:hidden"}>

                <Link replace={true} href={items.value}>
                   <a>{items.name}</a>
                </Link>

                {items.id > 0 && items.id < 5 ? 
                (<ChevronRightIcon className="absolute 
                 right-11 mt-[0.2rem]"/>)
                 : (<div></div>)}
              </a>
            </div>
          </div>
         </div> 
        </div>
       )}  
      </div>
      <div className="w-[16rem] pl-5 pb-1 mt-3 hover:bg-gray-700 cursor-pointer
       rounded">
        Shop FAQ
      </div>
      <Link href="/signin"><a className="w-[16rem] hover:bg-gray-700 cursor-pointer
       rounded my-[0.1rem] pb-1 mt-3 pl-5">Sign In</a></Link>
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

export default InnerMenu