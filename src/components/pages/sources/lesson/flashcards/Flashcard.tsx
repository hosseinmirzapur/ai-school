"use client"

import { IFlashCard } from "@/types"
import { Button } from "@nextui-org/react"

interface IProps {
	item: IFlashCard
	hidden: boolean
	flipped: boolean
	onFault: (flashcard: IFlashCard) => void
	increment: () => void
	flip: () => void
}
const Flashcard: React.FC<IProps> = ({
	item,
	hidden,
	flipped,
	onFault,
	increment,
	flip,
}) => {
	return hidden ? (
		<></>
	) : (
		<div
			className={`
            w-10/12
            md:w-10/12
            min-h-[50vh]
            mx-auto
            grid
            grid-rows-3
            flashcard
            ${flipped ? "flip" : ""}
            bg-gradient-to-br
            from-warning-300
            to-primary-300
            rounded-xl
         `}
		>
			{/* Type of flashcard */}
			<div
				className={`
                  row-span-1
                  flex
                  justify-center
                  items-center
                  text-2xl
                  font-bold
                  ${flipped ? "flashcard-back" : "flashcard-front"}
               `}
			>
				{flipped ? <span>پاسخ</span> : <span>سوال</span>}
			</div>

			{/* Flashcard content */}
			<div
				className={`
                  row-span-1
                  flex
                  justify-center
                  items-center
                  ${flipped ? "flashcard-back" : "flashcard-front"}
               `}
			>
				{flipped ? (
					<span className="text-lg lg:text-2xl text-center">
						{item.answer}
					</span>
				) : (
					<span className="text-lg lg:text-2xl text-center">
						{item.question}
					</span>
				)}
			</div>

			{/* Flashcard actions */}
			<div
				className={`
                  flex
                  w-full
                  justify-center
                  items-center
                  ${flipped ? "flashcard-back" : "flashcard-front"}
               `}
			>
				{flipped ? (
					<div className="flex justify-around w-full">
						<Button
							className="bg-[#59f9a1] font-bold shadow-lg"
							radius="full"
							onPress={increment}
						>
							یاد گرفتم
						</Button>
						<Button
							className="bg-danger-400 text-white font-bold shadow-lg"
							onPress={() => onFault(item)}
							radius="full"
						>
							اشتباه کردم
						</Button>
					</div>
				) : (
					<div className="flex justify-around">
						<Button
							className="text-base font-bold"
							color="secondary"
							variant="ghost"
							onPress={flip}
							radius="full"
						>
							دیدن جواب
						</Button>
					</div>
				)}
			</div>
		</div>
	)
}

export default Flashcard
