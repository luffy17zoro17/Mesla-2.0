






const MenuButton = ({handleToggle}) => {

    return (
      <div className="">
        <button onClick={handleToggle} className={`px-4 pb-0.4
       fixed z-20 right-4 top-[3rem] shadow-md shadow-black text-white
      font-mono font-bold border-4 border-yellow-200
      opacity-[0.9rem] rounded-lg hover:text-cyan-200
      cursor-pointer bg-black
      m-3 text-white
       hover:shadow hover:shadow-violet-600`}>
        Menu
         </button>
      </div>    
    );
}


export default MenuButton;