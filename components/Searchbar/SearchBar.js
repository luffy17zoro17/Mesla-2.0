import React,{forwardRef} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ClickOutside from './ClickOutside';





const SearchBar = forwardRef(({open,setOpen}, ref) => {
  return (
    <div className="fixed -top-3 right-[9rem] hidden lg:flex">
        <div ref={ref}>
           <button className="" onClick={() => setOpen(!open)}>
              <SearchIcon className="absolute text-white right-3 
              mt-2 ml-[2rem] z-70"/>
           </button>
           {open && (
              <div className="">
                <input 
                  className="bg-transparent rounded-sm h-8 pb-1 pl-2 border-[0.1rem]" 
                  placeholder="Search"
                /> 
              </div>
            )}       
          </div>
    </div>
  )
});

SearchBar.displayName = "SearchBar";

export default ClickOutside(SearchBar);