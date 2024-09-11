"use client"

import Carousel from "react-multi-carousel"
import CarouselItem from "./CarouselItem"

interface IProps {
   imgSrcs?: string[]
}

const responsive = {
   superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
   },
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
   },
   mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
   },
}

const LessonSlider: React.FC<IProps> = ({ imgSrcs }) => {
   return imgSrcs && imgSrcs.length > 0 ? (
      <div className="w-11/12 mx-auto py-5">
         {/* Carousel */}
         <Carousel responsive={responsive}>
            {imgSrcs.map((src, index) => (
               <CarouselItem src={src} key={index} />
            ))}
         </Carousel>
      </div>
   ) : (
      <div className="flex items-center justify-center text-xl md:text-2xl font-semibold">
         هنوز موردی ثبت نشده است
      </div>
   )
}

export default LessonSlider
