"use client"

import Image from "next/image"

const Bot = () => {
   return (
      <div className="w-full flex justify-center items-center py-5">
         <div
            className="
               flex
               items-center
               justify-center
               rounded-full
               p-3
               bg-gradient-to-tl
               from-red-300
               to-blue-300
               shadow-lg
            "
         >
            <Image
               src={"/assets/bot.png"}
               alt="bot-icon"
               width={100}
               height={100}
               draggable={false}
               className="w-[60px] md:w-[80px] lg:w-[100px]"
            />
         </div>
      </div>
   )
}

export default Bot
