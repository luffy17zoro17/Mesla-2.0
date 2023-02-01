

const LRButtons = ({buttonL,buttonR,id}) => {

    return (
       <div>
         <div className="text-center w-[100%]
                           flex justify-center">
                          <div className="
                           w-[22rem] sm:w-[26rem] md:flex md:justify-center 
                            md:gap-[6vmin] md:w-[75%]">    
                            <div className="cursor-pointer
                              opacity-80 text-white bg-gray-700 border 
                              rounded-3xl py-[0.9rem] text-[13px] shadow-xl shadow-black
                              font-bold mb-2 hover:opacity-100 md:w-[22rem] md:py-[1rem]
                              xl:w-[27rem]">
                                {buttonL}
                            </div>             
                            <div className={id === 7 ? "hidden" : `cursor-pointer shadow-xl
                             shadow-black
                              text-[13px] font-bold opacity-70
                               bg-gray-300 rounded-3xl 
                              mb-2 py-[0.9rem] hover:opacity-100
                              md:w-[22rem] md:py-[1rem]
                              xl:w-[27rem]`}>
                                {buttonR}
                            </div>                       
                          </div>
                          
          </div>  
       </div> 
    );
}


export default LRButtons;