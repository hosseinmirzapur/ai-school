"use client"

import { useCallback, useEffect, useState } from "react"

import SliderItem from "./SliderItem"
import SliderButtons from "./SliderButtons"
import ProgressBar from "./ProgressBar"

import useEmblaCarousel from "embla-carousel-react"

interface IProps {
   imgSrcs?: string[]
}

const LessonSlider: React.FC<IProps> = ({ imgSrcs }) => {
   // ** States and variables
   const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: false,
      direction: "ltr",
   })
   const [current, setCurrent] = useState(0)

   // ** Functions
   const scrollPrev = useCallback(() => {
      const legit = emblaApi && emblaApi.canScrollPrev()

      if (legit) {
         emblaApi.scrollPrev()
         setCurrent((curr) => curr - 1)
      }
   }, [emblaApi])
   const scrollNext = useCallback(() => {
      const legit = emblaApi && emblaApi.canScrollNext()

      if (legit) {
         emblaApi.scrollNext()
         setCurrent((curr) => curr + 1)
      }
   }, [emblaApi])

   return imgSrcs && imgSrcs.length > 0 ? (
      <div className="flex flex-col justify-center items-center">
         {/* Slider */}
         <div className="flex justify-center items-center w-full py-5 px-3 gap-3 mx-auto embla">
            <SliderButtons direction="next" onClick={scrollNext} />
            <div className="embla__viewport" ref={emblaRef}>
               <div className="embla__container" dir="ltr">
                  {imgSrcs.map((src, index) => (
                     <SliderItem src={src} key={index} />
                  ))}
               </div>
            </div>
            <SliderButtons direction="previous" onClick={scrollPrev} />
         </div>
         {/* Progress Bar */}
         <ProgressBar sliders={imgSrcs} index={current} />
      </div>
   ) : (
      <div className="flex items-center justify-center text-xl md:text-2xl font-semibold">
         هنوز موردی ثبت نشده است
      </div>
   )
}

export default LessonSlider
