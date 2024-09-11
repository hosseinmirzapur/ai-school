"use client"

import Image from "next/image"

interface IProps {
   src: string
}

const CarouselItem: React.FC<IProps> = ({ src }) => {
   return (
      <div className="w-auto h-auto flex items-center justify-center">
         <Image src={src} alt="slider-image" width={600} height={350} />
      </div>
   )
}

export default CarouselItem
