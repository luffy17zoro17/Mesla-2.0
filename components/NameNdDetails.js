

const NameNdDetails = ({type,id,detail,name})=>{

    return (
        <div>
            <div className="py-[6.5rem] fixed top-[13%] z-20 w-[100%] text-center">
                    <div>
                        <div className={type === "solar" || id===3 ? 
                        `font-semibold text-4xl z-30 
                         text-gray-600 tracking-[0.05rem]`
                        : `font-semibold text-4xl tracking-[0.05rem]
                         text-white z-30`}>
                          {name}
                        </div>                   
                        <div className={`${type === "solar" || id===3 ? 
                        `shadow-md shadow-white font-medium text-gray-600` 
                        : "font-medium text-white shadow-md shadow-green-300"}
                         ${type === "car" ? `underline cursor-pointer py-2 
                        ` : "py-2"}`}>
                          {detail}
                        </div>  
                     </div>   
            </div>
        </div>
    );
}


export default NameNdDetails