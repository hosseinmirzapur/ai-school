"use client"

import Image from "next/image"

import { Card } from "@nextui-org/react"
import Link from "next/link"

interface IHomeCard {
   iconSrc: string
   text: string
   backgroundSrc: string
   href: string
}

const HomeCard: React.FC<IHomeCard> = ({
   iconSrc,
   text,
   backgroundSrc,
   href,
}) => {
   return (
      <Link
         href={href}
         className="
            shadow-lg
            hover:shadow-2xl
            transition-all
            ease-in-out
            duration-400
            rounded-3xl
         "
      >
         <Card
            className="
               relative
               w-[250px]
               h-[180px]
               md:w-[220px]
               md:h-[150px]
               rounded-3xl
               cursor-pointer
            "
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
      </Link>
   )
}

export default HomeCard
