



const SmallBottomBar = ({id}) => {

    return (
       <div>
        <div className={id===7 ? `bg-white text-gray-800 fixed w-[100%]
                   z-20 bottom-0 right-0 
                   w-[100%] text-center text-[0.75rem] 
                   flex-wrap font-semibold pb-1 tracking-wide sm:tracking-wider
                   lg:tracking-widest`: "hidden"}> 

                   <div className="bg-white shadow shadow-black
                    md:flex justify-center">
                     Mesla © 2022&nbsp;&nbsp;&nbsp;Privacy & Legal
                     &nbsp;&nbsp;&nbsp;Vehicle Recalls&nbsp;&nbsp;&nbsp;Contact
                     &nbsp;&nbsp;&nbsp;Careers&nbsp;&nbsp;&nbsp;News 
                     <h1 className="hidden sm:flex justify-center">
                       &nbsp;&nbsp;&nbsp;Engage Locations
                      </h1>
                   </div>
        </div>
       </div> 
    );
}


export default SmallBottomBar;