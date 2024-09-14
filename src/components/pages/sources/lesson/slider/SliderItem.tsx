"use client"

import Image from "next/image"

import { useState } from "react"

interface IProps {
   src: string
}

const SliderItem: React.FC<IProps> = ({ src }) => {
   // ** States and variables
   const [isGrabbing, setIsGrabbing] = useState(false)

   // ** Functions
   const grab = () => setIsGrabbing(true)
   const letGo = () => setIsGrabbing(false)

   return (
      <div
         onMouseDown={grab}
         onMouseUp={letGo}
         onMouseLeave={letGo}
         className={`
            flex
            items-center
            justify-center
            ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}
            embla__slide
         `}
      >
         <Image
            src={src}
            alt="slider-image"
            width={500}
            height={500}
            className="object-contain"
            draggable={false}
         />
      </div>
   )
}

export default SliderItem
