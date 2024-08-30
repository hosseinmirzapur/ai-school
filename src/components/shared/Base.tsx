"use client"

import MobileNavbar from "./MobileNavbar"
import Navbar from "./Navbar"

const Base = () => {
   return (
      <>
         <div className="block lg:hidden">
            <MobileNavbar />
         </div>
         <div className="flex items-center justify-center h-[100vh] w-11/12 md:w-full mx-auto">
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
               <div className="hidden lg:flex">
                  <Navbar />
               </div>
            </div>
         </div>
      </>
   )
}

export default Base
