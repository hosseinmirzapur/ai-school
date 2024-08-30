"use client"

import MobileNavbar from "./MobileNavbar"
import Navbar from "./Navbar"

const Base = () => {
   return (
      <>
         <div className="block md:hidden">
            <MobileNavbar />
         </div>
         <div className="flex items-center justify-center h-[100vh] md:py-5 lg:py-2 w-11/12 mx-auto">
            <div
               className="
                  flex
                  w-[1400px]
                  min-h-[90%]
                  lg:h-[826px]
                  bg-gray-100
                  rounded-[24px]
               "
            >
               <div className="hidden md:flex">
                  <Navbar />
               </div>
            </div>
         </div>
      </>
   )
}

export default Base
