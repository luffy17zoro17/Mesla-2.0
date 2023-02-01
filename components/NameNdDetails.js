import LRButtons from "./LRButtons";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const NameNdDetails = ({type,id,detail,name,buttonL,buttonR})=>{

    return (
        <div className="fixed w-full flex 
            justify-center flex-col items-center
            h-full top-0">
            <div className="py-[6.5rem] text-center space-y-[3rem] 
            lg:space-y-[10rem]">
                    <div className="">
                        <div className={`
                        ${id===1 ? `` : ``}
                        ${type === "solar" || id===3 ? 
                        `font-semibold text-4xl 
                         text-green-400 tracking-[0.05rem]`
                        : `font-semibold text-4xl tracking-[0.05rem]
                         text-white`}`}>
                          {name}
                        </div>                   
                        <div className={`${type === "solar" && id===3 ? 
                        `shadow-md shadow-white font-medium text-green-400` 
                        : `font-medium text-white shadow-md shadow-green-300 w-screen`}
                         ${type === "car" ? `underline cursor-pointer py-2 
                        ` : "py-2"}`}>
                          {detail}
                        </div>  
                     </div>   

                     <LRButtons
                        buttonL={buttonL}
                        buttonR={buttonR}
                        id={id}
                     />

       <div className={id === 1 ? `
          cursor-pointer fixed left-0 z-[-70]
           flex flex-col w-[100%] bottom-[0rem]
           justify-center items-center lg:bottom-[3rem]
           ` : "hidden"}>  
          <h2 className="text-white text-sm italic font-bold
          text-green-200">
            Swipe / Scroll</h2>  
          <KeyboardArrowDownIcon
            className="text-[4rem] text-red-500 
            shadow-xl shadow-black animate-bounce
             hover:text-green-200 hover:shadow-red-500"
          />       
    </div>  
            </div>
        </div>
    );
}


export default NameNdDetails