
import React,{forwardRef} from "react";
import ClickOutside from "../../components/Searchbar/ClickOutside";

import Shopbar from '../../components/Shopbar';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';

import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Image from 'next/image'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const products = [
  { 
    id:1,
    item:'Wall Connector',
    detail:'The most comfortable way to charge at home',
    imgSrc:'https://images.unsplash.com/photo-1554744512-783e8dc69b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id:2,
    item:'Chill Collection',
    detail:'Premium comfort anywhere anytime!',
    imgSrc:'https://images.unsplash.com/photo-1575700902901-f80c078783f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
  },
  {
    id:3,
    item:'Model Y All-Weather Interior Liners',
    detail:'Provides you with maximum protection and durability',
    imgSrc:'https://live.staticflickr.com/919/28564742547_cf6e8c1d59_o.jpg',
  },
  
]



const SwipeableTextMobileStepper=()=>{

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = products.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if(activeStep === maxSteps-1){
      setActiveStep(0);
    }
  };


  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

    if(activeStep===0) {
      setActiveStep(maxSteps-1);
    }
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };




  return (
   <>
    <div className="relative w-[100%] h-screen">
    <div className="bg-black sticky top-0 left-0 w-[100%] z-30"><Shopbar/></div>
    <div className="">
    <Box className="">

       <AutoPlaySwipeableViews
        className=""
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
       >
        {products.map((product, index) => (
          <div key={product.id} className="">
            {Math.abs(activeStep - index) <= 2 ? (
            <div className="relative z-30 h-screen"> 
              <Image
                component="Image"
                layout="fill"
                src={product.imgSrc}
                className="object-cover"
                alt=""
              />
             
              <div className="absolute w-full h-[100%]
               flex flex-col items-center justify-center">
                <div className="font-bold h-[40%] relative
                space-y-4 text-white 
                 text-center flex flex-col items-center justify-center">  
                  <h1 className="text-[6vmin] z-30 p-[4vmin]">{product.item}</h1>
                  <h2 className="text-[3vmin] z-30 p-[4vmin]">{product.detail}</h2>
                  <div className="px-[4vmin] text-[4vmin] pt-2 pb-3
                   bg-black cursor-pointer z-30 text-yellow-300
                    rounded-md">
                    Shop Now
                  </div>
                  <div className="bg-black border-4 rounded-b-xl
                   absolute z-0 w-[100%] h-[100%] opacity-40 
                   bottom-0"/>
                </div>
              </div>

            </div> 
            ) : null}
          </div>
        ))}
       </AutoPlaySwipeableViews>
        
     
       <MobileStepper
            className=" absolute flex justify-center z-0
             scale-[2] mb-[4rem] 
             bg-transparent"
            steps={maxSteps}
            activeStep={activeStep}
            nextButton={
      
              <Button
                size="large"
                className="flex scale-[2.5] text-orange-300
              absolute bottom-[3rem] mr-[-22vmin]
              hover:text-green-600"
                onClick={handleNext}
                
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
           
            }
            backButton={
             
              <Button className="flex text-orange-300
              absolute bottom-[3rem] scale-[2.5] ml-[-22vmin]
               hover:text-green-600"
               size="large" onClick={handleBack}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}   
              </Button>
          
            }
       />
    
    </Box>
    </div>
    </div>
   </>
  );
}

export default SwipeableTextMobileStepper;

