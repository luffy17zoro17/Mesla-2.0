import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'

const shop = () => {
  return (
    <div className="">
        <div className="bg-black"><Navbar/></div>
        shop
        <Image
          src="https://images.unsplash.com/photo-1554744512-783e8dc69b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
          layout="fill"
          className="object-cover"
        />
    </div>
  )
}

export default shop