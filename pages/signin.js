import React from 'react'
import SignInBar from '../components/SignInBar';
import InfoIcon from '@mui/icons-material/Info';


const Signin = () => {
  return (
    <div className="">
      <SignInBar/>
      <div className='mt-[3rem]'>
       <div className="w-[100%] flex flex-col 
       items-center gap-5 font-semibold tracking-wide">
          <h1 className="text-4xl font-semibold pt-5 pr-[12rem]">Sign In</h1>
          <div className="flex flex-col font-medium">
            &nbsp; &nbsp;<h1 className="pl-4 text-gray-500">Email Address
            <InfoIcon  className="ml-1" color="primary"/></h1>
            <input className="bg-gray-100 h-[2.6rem] pl-5 mt-2 w-[20rem] rounded-3xl"/>
          </div>
         
          <div className="w-[20rem] h-[2.7rem] flex justify-center
           items-center rounded-3xl bg-blue-700 text-white
           text-xs font-semibold tracking-widest cursor-pointer hover:bg-blue-600">
            SIGN IN
          </div>

          <div className="flex font-light text-sm">
              <h1 className="underline cursor-pointer">Forgot email?</h1>&nbsp; | 
              &nbsp;<h2 className="underline cursor-pointer">Forgot password?</h2>
          </div>
          <div className="flex justify-center items-center font-semibold tracking-wider
           text-gray-600 py-[1%]">
           <hr className="h-1 w-[8.6rem] mt-1 mr-2"/>OR<hr className="h-1 mt-1 ml-2 
           w-[8.6rem]"/>
          </div>
          <div className="text-black w-[20rem] h-[2.7rem] rounded border-2
           border-black flex justify-center items-center
           cursor-pointer hover:bg-black hover:text-white">
            Create Account
          </div>
          <div className="w-[100%] flex bottom-0 pb-2
            justify-center items-end flex-wrap absolute text-center bg-white">
            <span className="text-[0.8rem] text-gray-500
             leading-[1.8rem] font-bold w-[100%]">
              &nbsp;&nbsp;&nbsp;Mesla © 2022 <br className="sm:hidden"/>
              &nbsp;&nbsp;&nbsp;Privacy & Legal<br className="sm:hidden"/>
              &nbsp;&nbsp;&nbsp;Contact
            </span>
          </div>
       </div>
    </div>
    </div>
  )
}

export default Signin