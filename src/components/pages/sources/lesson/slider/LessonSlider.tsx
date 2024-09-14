"use client"

import SliderItem from "./SliderItem"
import SliderButtons from "./SliderButtons"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect } from "react"

interface IProps {
   imgSrcs?: string[]
}

const LessonSlider: React.FC<IProps> = ({ imgSrcs }) => {
   // ** States and variables
   const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: false,
      direction: "rtl",
   })

   // ** Functions
   const scrollPrev = useCallback(
      () => emblaApi && emblaApi.scrollNext(),
      [emblaApi],
   )
   const scrollNext = useCallback(
      () => emblaApi && emblaApi.scrollPrev(),
      [emblaApi],
   )

   useEffect(() => {
      if (emblaApi) {
         console.log("embla...")
      }
   }, [emblaApi])

   return imgSrcs && imgSrcs.length > 0 ? (
      <div className="flex justify-center items-center w-full py-5 px-3 gap-3 mx-auto embla">
         <SliderButtons direction="next" onClick={scrollNext} />
         <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
               {imgSrcs.map((src, index) => (
                  <SliderItem src={src} key={index} />
               ))}
            </div>
         </div>
         <SliderButtons direction="previous" onClick={scrollPrev} />
      </div>
   ) : (
      <div className="flex items-center justify-center text-xl md:text-2xl font-semibold">
         هنوز موردی ثبت نشده است
      </div>
   )
}

export default LessonSlider
