import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import Link from 'next/link';




const SignInBar = () => {
  return (
    <>
    <div className="flex justify-between items-center 
     h-[3.5rem] px-5">
      <Link href="/" className="">
        <a className="font-bold text-lg pl-5">
          M E S L A
        </a>
      </Link>
      <h2 className="font-semibold cursor-pointer"><PublicIcon/>  en-US</h2>
    </div>
    
    </>
  )
}

export default SignInBar