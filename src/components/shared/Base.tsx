"use client"

import Image from "next/image"
import MobileNavbar from "./MobileNavbar"
import Navbar from "./Navbar"

interface IProps {
   children: React.ReactNode
}

const Base: React.FC<IProps> = ({ children }) => {
   return (
      <div className="relative">
         <Image
            src={"/assets/pen.png"}
            alt="pen-icon"
            width={100}
            height={100}
            className="
                     absolute
                     w-[55px]
                     h-[55px]
                     md:w-[70px]
                     md:h-[70px]
                     lg:w-[110px]
                     lg:h-[110px]
                     top-20
                     md:top-4
                     lg:top-2
                     right-1
                     md:-right-4
                     lg:right-16
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
               w-[85px]
               h-[85px]
               md:w-[100px]
               md:h-[100px]
               lg:w-[130px]
               lg:h-[130px]
               bottom-2
               left-4
               lg:left-16
               z-20
               rotate-[130deg]
            "
            draggable={false}
         />
         <div className="block md:hidden bg-purple-950">
            <MobileNavbar />
         </div>
         <div
            className="
               container-xl
               flex
               items-center
               justify-center
               h-full
               md:h-[100svh]
               py-10
               md:py-5
               lg:py-2
               w-11/12
               md:w-10/12
               m-auto
            "
         >
            <div
               className="
                  flex
                  w-[1600px]
                  min-h-[90%]
                  lg:h-[626px]
                  bg-gray-200
                  rounded-[24px]
                  z-10
               "
            >
               <div className="hidden md:flex">
                  <Navbar />
               </div>
               {children}
            </div>
         </div>
      </div>
   )
}

export default Base
