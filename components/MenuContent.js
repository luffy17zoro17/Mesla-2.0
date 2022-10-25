
import Menu from "./Menu";
import BgBlur from "../components/BgBlur";

import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';





const MenuContent = ({handleToggle}) => {

    return (
      <div>
        <div>                      
                <Menu/>
                <BgBlur/> 
                  
                
                <button onClick={handleToggle} className="fixed z-50 top-7 right-11">
                   <CancelPresentationIcon 
                     className="text-white p-[0.2rem]
                    hover:bg-gray-600 rounded scale-[1.5]"/>
                </button>
            
        </div>

      </div>

    );
}

export default MenuContent;