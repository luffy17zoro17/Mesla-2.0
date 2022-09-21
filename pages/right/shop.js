
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
    <div className="bg-black"><Shopbar/></div>
    <Box className="absolute h-[100%] min-w-[100%]">

       <AutoPlaySwipeableViews
        className="absolute h-[100%]
         min-w-[100%]"
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
       >
        {products.map((product, index) => (
          <div key={product.id} className="absolute min-h-screen min-w-[100%]">
            {Math.abs(activeStep - index) <= 2 ? (
            <div className="fixed z-0 h-screen w-screen"> 
              <Image
                component="Image"
                layout="fill"
                src={product.imgSrc}
                className="object-cover"
                alt=""
              />
             
              <div className="absolute w-[100%] h-[98%]
               flex flex-col items-center justify-center">
                <div className="font-bold h-[70%] space-y-4 text-white
                 text-center flex flex-col items-center justify-end">  
                  <h1 className="text-5xl">{product.item}</h1>
                  <h2 className="text-2xl">{product.detail}</h2>
                  <div className="w-[26rem] pt-2 pb-3 bg-black cursor-pointer 
                    rounded-md sm:w-[18rem]">
                    Shop Now
                  </div>
                </div>
              </div>

            </div> 
            ) : null}
          </div>
        ))}
       </AutoPlaySwipeableViews>
        
     
       <MobileStepper
            className="bg-transparent bottom-4 absolute z-0 mx-[25%] xs:mx-[13%]
            sm:mx-[30%] md:mx-[35%] xl:mx-[42%]"
            steps={maxSteps}
            activeStep={activeStep}
            nextButton={
      
              <Button
                size="large text-white"
                className="scale-[140%] hover:text-green-300"
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
             
              <Button className="scale-[140%] hover:text-green-300"
               size="large text-white" onClick={handleBack}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}   
              </Button>
          
            }
       />
    
    </Box>
  
   </>
  );
}

export default SwipeableTextMobileStepper;

