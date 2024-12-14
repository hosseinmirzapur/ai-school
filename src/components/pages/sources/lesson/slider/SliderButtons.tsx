"use client"

import { Button } from "@nextui-org/react"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"

interface IProps {
	direction: "next" | "previous"
	onClick?: () => void
}

const SliderButtons: React.FC<IProps> = ({ direction, onClick }) => {
	return (
		<Button
			color="secondary"
			variant="light"
			isIconOnly
			radius="full"
			className={`
               cursor-pointer
               rounded-full
               flex
               items-center
               justify-center
               embla__button
               ${
						direction === "next"
							? "embla__button--next"
							: "embla__button--prev"
					}
            `}
			onPress={onClick}
		>
			{direction == "next" ? (
				<GrFormNext size={22} />
			) : (
				<GrFormPrevious size={22} />
			)}
		</Button>
	)
}

export default SliderButtons
