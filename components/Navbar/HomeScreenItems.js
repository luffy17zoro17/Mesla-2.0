import React from "react";
import LRButtons from "../LRButtons";
import NameNdDetails from "../NameNdDetails";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SmallBottomBar from "../SmallBottomBar";
import Image from "next/image";
import MenuContent from "../MenuContent";

const images = [

    {
      id:1,
      type:'car',
      name:'Model 3',
      detail:"Order Online for Touchless Delivery",
      buttonL:'CUSTOM ORDER',
      buttonR:'EXISTING INVENTORY',
      imgPath:`https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80`,
    
    },
    {
      id:2,
      type:'car',
      name:'Model Y',
      detail:"Order Online for Touchless Delivery",
      buttonL:'CUSTOM ORDER',
      buttonR: 'EXISTING INVENTORY',
      imgPath: `https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
    
    },
    {
      id:3,
      type:'car',
      name:'Model X',
      detail:"Order Online for Touchless Delivery",
      buttonL:'CUSTOM ORDER',
      buttonR:'EXISTING INVENTORY',
      imgPath: `https://images.unsplash.com/photo-1558992658-08a063bb01af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
      
    },  
    {
      id:4,
      type:'car',
      name:'Model S',
      detail:"Order Online for Touchless Delivery",
      buttonL:'CUSTOM ORDER',
      buttonR:'EXISTING INVENTORY',
      imgPath:`https://images.unsplash.com/photo-1633507104426-f2be1293f5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1906&q=80`,
    },
    {
      id:5,
      type:'solar',
      name:'Solar Panels',
      detail:"Lowest Cost Solar Panels in America",
      buttonL:'ORDER NOW',
      buttonR:'LEARN MORE',
      imgPath:`https://cdn.pixabay.com/photo/2022/01/13/14/45/house-6935453_960_720.jpg`,
      footer:''
    },
    {
      id:6,
      type:'solar',
      name:'Solar Roof',
      detail:'Produce Clean Energy From Your Roof',
      buttonL:'ORDER NOW',
      buttonR:'LEARN MORE',
      imgPath:`https://images.unsplash.com/photo-1637417494521-78b4d1d33029?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
      
    },
    {
      id:7,
      type:'accessories',
      name:'Accessories',
      detail:'',
      buttonL:'SHOP NOW',
      buttonR:'',
      imgPath:`https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80`,
      
  
    }
   
  ]
  



  function FadeInSection(props){

    const [isVisible,setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(()=>{
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? "is-visible": ""}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }








const HomeScreenItems = ({isShow,handleToggle}) => {
   return (
    <div>
          {isShow ?
           (
       <MenuContent
          handleToggle={handleToggle}
       />        
    ) : (<div></div>)}

    <div className={isShow ? `overflow-y-hidden fixed h-[100%] w-[100%]` 
    : ``}>
    
        
      {images.map(({id,name,detail,imgPath,buttonL,buttonR,type})=>(
    
    <div key={id} className="relative w-full
       border-4 border-black">
           
            <div className={`flex flex-col h-screen
              ${id===1 && "mt-[-11rem]"}`}>
              <Image
                src={imgPath}
                height={3660}
                width={1800}
                layout="responsive"
                className={id===1 ? `bg-black
                rounded-t-lg object-contain z-[-10] md:object-cover` : 
                "object-contain z-[-10] bg-black md:object-cover"}
                alt=""
            />
            
            </div>  
           
           
            
    <FadeInSection className={id===1 && "block"}> 
        
    
        <NameNdDetails
           type={type}
           id={id}
           name={name}
           detail={detail}
        />                                
                        
        <LRButtons
           buttonL={buttonL}
           buttonR={buttonR}
           id={id}
        />
    <div className={id === 1 ? `
          cursor-pointer fixed mt-[3rem] flex flex-col w-[100%] top-[80%]
           justify-center items-center
           lg:top-[74%]` : "hidden"}>  
          <h2 className="text-white text-sm italic font-bold 
          text-green-200">
            Swipe / Scroll</h2>  
          <KeyboardArrowDownIcon
            className="mt-[5%] text-[4rem] text-red-500 
            shadow-xl shadow-black animate-bounce
             hover:text-green-200 hover:shadow-red-500"
          />       
    </div>  
    <div className={id===7 && `bg-black absolute 
       w-[100%] z-[-10]
      bottom-[5]`}/>
    <div><SmallBottomBar
         id={id}
       /></div>
                
      
    </FadeInSection> 
         
    </div> 
          
    ))}
    
    </div>
    </div>
     
        
    );
}

export default HomeScreenItems;