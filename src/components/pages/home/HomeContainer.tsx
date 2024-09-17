"use client"

import RightSide from "./RightSide"
import LeftSide from "./LeftSide"

const HomeContainer = () => {
   return (
      <div className="container h-full md:h-[120vh]">
         <div className="w-11/12 mx-auto grid grid-rows-2 lg:grid-cols-3 py-2 h-full">
            {/* Right Side */}
            <RightSide />

            {/* Left Side */}
            <LeftSide />
         </div>
      </div>
   )
}

export default HomeContainer
