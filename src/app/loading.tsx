import Image from "next/image"

import { Card, Progress } from "@nextui-org/react"

import { blurDataUrl } from "@/utils"

const CardSkeleton = () => {
	return (
		<Card
			className="
				flex
				flex-col
				w-[300px]
				h-auto
				md:w-[600px]
				lg:w-[900px]
				space-y-5
				md:space-y-10
				lg:space-y-16
				p-4
				animate-pulse
				bg-inherit
				shadow-none
				drop-shadow-none
			"
			radius="lg"
		>
			{/* School */}
			<div
				className="
               h-24
               flex
               items-center
               justify-center
            "
			>
				<Image
					src={"/assets/school.png"}
					alt="school-icon"
					width={100}
					height={100}
					draggable={false}
					placeholder="blur"
					blurDataURL={blurDataUrl}
				/>
			</div>

			{/* Pencil-Case and Bag */}
			<div
				className="
               flex
               justify-between
               h-full
               w-full
            "
			>
				<Image
					src="/assets/bag.png"
					alt="bag-icon"
					width={80}
					height={80}
					className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
					draggable={false}
					placeholder="blur"
					blurDataURL={blurDataUrl}
				/>
				<Image
					src="/assets/pencil-case.png"
					alt="pencil-case-icon"
					width={80}
					height={80}
					className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
					draggable={false}
					placeholder="blur"
					blurDataURL={blurDataUrl}
				/>
			</div>

			{/* Spinning Ball */}
			<div
				className="
               h-full
               mx-auto
               flex
               justify-center
               items-center
            "
			>
				<Image
					src="/assets/ball.png"
					alt="ball-icon"
					width={80}
					height={80}
					className="
                  w-[60px]
                  h-[60px]
                  md:w-[80px]
                  md:h-[80px]
                  animate-spinner-ease-spin
               "
					draggable={false}
					placeholder="blur"
					blurDataURL={blurDataUrl}
				/>
			</div>
		</Card>
	)
}

const Loading = () => {
	return (
		<div className="flex items-center justify-center w-full h-[100vh]">
			<Progress
				size="sm"
				isIndeterminate
				aria-label="Loading..."
				className="w-full absolute top-0"
				color="secondary"
			/>
			<div
				className="
               flex
               flex-col
               md:flex-row
               items-center
               justify-center
               gap-5
            "
			>
				<CardSkeleton />
			</div>
		</div>
	)
}

export default Loading
