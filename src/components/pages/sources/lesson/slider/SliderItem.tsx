"use client"

import { useDisclosure } from "@nextui-org/react"
import Image from "next/image"

import { useState } from "react"
import ItemModal from "./ItemModal"
import { blurDataUrl } from "@/utils"

interface IProps {
	src: string
}

const SliderItem: React.FC<IProps> = ({ src }) => {
	// ** States and variables
	const [isGrabbing, setIsGrabbing] = useState(false)
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

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
            ${isGrabbing ? "cursor-grabbing" : "cursor-zoom-in"}
            embla__slide
            w-full
         `}
		>
			<ItemModal
				Content={
					<Image
						src={src}
						alt="slider-image"
						width={800}
						height={800}
						className="w-full"
						draggable={false}
						placeholder="blur"
					/>
				}
				Trigger={
					<Image
						src={src}
						alt="slider-image"
						width={500}
						height={500}
						className="w-full"
						draggable={false}
						onClick={onOpen}
						placeholder="blur"
						blurDataURL={blurDataUrl}
					/>
				}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			/>
		</div>
	)
}

export default SliderItem
