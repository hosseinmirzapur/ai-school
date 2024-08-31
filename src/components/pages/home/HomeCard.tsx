"use client"

import { Card, CardBody } from "@nextui-org/react"
import Image from "next/image"

interface IHomeCard {
   backgroundSrc: string
   iconSrc: string
   text: string
}

const HomeCard: React.FC<IHomeCard> = ({ backgroundSrc, iconSrc, text }) => {
   return (
      <Card className="relative h-[180px] w-[240px] bg-gray-200">
         <Image
            src={backgroundSrc}
            alt=""
            width={600}
            height={600}
            className="w-[240px] h-[180px] overflow-hidden rounded-3xl"
            draggable={false}
         />
         <Image
            src={iconSrc}
            alt=""
            width={132}
            height={132}
            className="absolute left-[16px] -rotate-12 bg-none"
            draggable={false}
         />
         <Image
            src={"/assets/heart.png"}
            alt=""
            width={40}
            height={40}
            className="absolute right-[20px] top-[20px]"
            draggable={false}
         />
         <span className="absolute text-center text-4xl bottom-4 left-[40px] text-white">
            {text}
         </span>
      </Card>
   )
}

export default HomeCard
