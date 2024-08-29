"use client"

import Navbar from "./Navbar"

const Base = () => {
   return (
      <div className="flex items-center justify-center h-[100vh]">
         <div className="flex w-[1400px] h-[826px] bg-gray-100 rounded-[24px]">
            <Navbar />
         </div>
      </div>
   )
}

export default Base
