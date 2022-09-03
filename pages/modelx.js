import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'

const Modelx = () => {
  return (
    <div>
        <div className="">
          <Navbar/>
        </div>
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1626551563364-78af4cd990ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            layout="fill"
            className="object-cover"
            alt=""
          />
        </div>
    </div>
  )
}

export default Modelx