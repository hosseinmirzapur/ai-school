"use client"

import Image from "next/image"
import MobileNavbar from "./MobileNavbar"
import Navbar from "./Navbar"

const Base = () => {
   return (
      <div className="relative">
         <div className="block md:hidden bg-purple-900">
            <MobileNavbar />
         </div>
         <div className="flex items-center justify-center h-[100vh] md:py-5 lg:py-2 w-11/12 mx-auto">
            <div
               className="
                  flex
                  w-[1400px]
                  min-h-[90%]
                  lg:h-[626px]
                  bg-gray-100
                  rounded-[24px]
                  z-10
               "
            >
               <Image
                  src={"/assets/pen.png"}
                  alt="pen-icon"
                  width={100}
                  height={100}
                  className="
                     absolute
                     w-[50px]
                     h-[50px]
                     md:w-[80px]
                     md:h-[80px]
                     lg:w-[100px]
                     lg:h-[100px]
                     top-20
                     md:top-5
                     lg:top-2
                     right-1
                     md:right-1
                     lg:right-[175px]
                     z-20
                  "
                  draggable={false}
               />
               <Image
                  src={"/assets/book.png"}
                  alt="book-icon"
                  width={100}
                  height={100}
                  className="
                     absolute
                     w-[70px]
                     h-[70px]
                     md:w-[100px]
                     md:h-[100px]
                     lg:w-[120px]
                     lg:h-[120px]
                     bottom-2
                     left-[20px]
                     lg:left-[186px]
                     z-20
                     rotate-[130deg]
                  "
                  draggable={false}
               />
               <div className="hidden md:flex">
                  <Navbar />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Base
