"use client"

import { useCallback } from "react"

import SliderItem from "./SliderItem"
import SliderButtons from "./SliderButtons"

import useEmblaCarousel from "embla-carousel-react"
import { ISlider } from "@/types"

interface IProps {
	sliders?: ISlider[]
}

const LessonSlider: React.FC<IProps> = ({ sliders }) => {
	// ** States and variables
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		direction: "ltr",
	})

	// ** Functions
	const scrollPrev = useCallback(() => {
		const legit = emblaApi && emblaApi.canScrollPrev()

		if (legit) {
			emblaApi.scrollPrev()
		}
	}, [emblaApi])
	const scrollNext = useCallback(() => {
		const legit = emblaApi && emblaApi.canScrollNext()

		if (legit) {
			emblaApi.scrollNext()
		}
	}, [emblaApi])

	return sliders && sliders.length > 0 ? (
		<div className="flex flex-col justify-center items-center">
			{/* Slider */}
			<div className="flex justify-center items-center w-full py-5 px-3 gap-1 mx-auto embla">
				<SliderButtons direction="next" onClick={scrollNext} />
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container" dir="ltr">
						{sliders.map((slider, index) => (
							<SliderItem src={slider.image} key={index} />
						))}
					</div>
				</div>
				<SliderButtons direction="previous" onClick={scrollPrev} />
			</div>
		</div>
	) : (
		<div className="flex items-center justify-center text-xl md:text-2xl font-semibold">
			هنوز موردی ثبت نشده است
		</div>
	)
}

export default LessonSlider
