






const MenuButton = ({handleToggle}) => {

    return (
      <div>
        <button onClick={handleToggle} className={`px-4 pb-0.5
       fixed z-30 right-4 top-[3.3rem] shadow-md shadow-violet-300 text-white
      font-mono font-bold
      opacity-[0.9rem] rounded-lg hover:text-cyan-300
      cursor-pointer 
      m-3 xl:bg-transparent text-white shadow shadow-red-500
      xl:shadow-green-300 hover:shadow hover:shadow-violet-600`}>
        Menu
         </button>
      </div>    
    );
}


export default MenuButton;