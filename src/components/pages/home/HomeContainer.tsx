"use client"

import RightSide from "./RightSide"
import LeftSide from "./LeftSide"

const HomeContainer = () => {
   return (
      <div className="w-full h-[100vh]">
         <div className="w-11/12 mx-auto grid grid-rows-2 lg:grid-cols-3 py-5 h-full">
            {/* Right Side */}
            <RightSide />

            {/* Left Side */}
            <LeftSide />
         </div>
      </div>
   )
}

export default HomeContainer
