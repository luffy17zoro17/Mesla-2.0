import React,{forwardRef} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ClickOutside from './ClickOutside';





const SearchBar = forwardRef(({open,setOpen}, ref) => {
  return (
    <div className="fixed -top-3 right-[9rem]">
        <div ref={ref}>
           <button className="" onClick={() => setOpen(!open)}>
              <SearchIcon className="absolute right-3 mt-2 ml-[2rem]"/>
           </button>
           {open && (
              <div>
                <input 
                  className="relative rounded-sm h-8 pb-1 pl-2 border-[0.1rem] z-10 
                        bg-transparent" 
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