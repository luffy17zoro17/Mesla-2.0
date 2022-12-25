import React, {useState} from "react";
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar';



import NavbarTop from "../components/Navbar/NavbarTop";
import SmallBottomBar from "../components/SmallBottomBar";
import LRButtons from "../components/LRButtons";
import NameNdDetails from "../components/NameNdDetails";
import MenuButton from "../components/MenuButton";
import MenuContent from "../components/MenuContent";
import HomeScreenItems from "../components/Navbar/HomeScreenItems";






// ive done slight improvements over Mesla my oldest project





export default function Home() {

  const [isShow,setIsShow] = useState(false);


  const handleToggle = () => {

     setIsShow(!isShow);
  }


  return (
   <div>
    <Head>
        <title>Mesla Auto</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="https://iconarchive.com/download/i54293/crountch/one-piece-jolly-roger/Luffys-flag.ico" />
    </Head>
   
  
   <div> 
     <div><NavbarTop/></div>
     <div className="sticky top-0 left-0 z-20 self-start"><Navbar/></div>
     <div className=""><HomeScreenItems
       isShow={isShow}
       setIsShow={setIsShow}
       handleToggle={handleToggle}
    /></div> 
   </div> 
   
     <div><MenuButton
        handleToggle={handleToggle}
     /></div>     
  
 
  </div>
    
  );
}


