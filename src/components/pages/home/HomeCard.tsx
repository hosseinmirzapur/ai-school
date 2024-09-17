"use client"

import { Card } from "@nextui-org/react"
import Image from "next/image"

interface IHomeCard {
   iconSrc: string
   text: string
   backgroundSrc: string
   onClick: () => void
}

const HomeCard: React.FC<IHomeCard> = ({
   iconSrc,
   text,
   backgroundSrc,
   onClick,
}) => {
   return (
      <Card
         className="
            relative
            w-[250px]
            h-[180px]
            md:w-[220px]
            md:h-[150px]
            rounded-3xl
            cursor-pointer
            hover:shadow-xl
            transition-all
            ease-out
            duration-400
         "
         onClick={onClick}
      >
         <Image
            src={backgroundSrc}
            alt="background-src"
            width={600}
            height={600}
            className="
               w-full
               h-full
               overflow-hidden
               rounded-3xl
            "
            draggable={false}
         />
         <Image
            src={iconSrc}
            alt="icon-src"
            width={132}
            height={132}
            className="absolute left-[16px] -rotate-12 bg-none"
            draggable={false}
         />
         <Image
            src={"/assets/heart.png"}
            alt="heart-icon"
            width={40}
            height={40}
            className="absolute right-[20px] top-[20px]"
            draggable={false}
         />
         <div className="absolute bottom-4 w-full">
            <span className="flex justify-center text-3xl font-bold text-gray-100 w-full">
               {text}
            </span>
         </div>
      </Card>
   )
}

export default HomeCard
