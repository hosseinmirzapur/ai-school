"use client"

import { flashCards } from "./data"

import Bottom from "./Bottom"
import Middle from "./Middle"
import Top from "./Top"
import { lessons, subjectBooks } from "../../data"

interface IProps {
	sourceID: number | string
	lessonID: number | string
}

const GameContainer: React.FC<IProps> = ({ lessonID, sourceID }) => {
	// ** States and variables
	const lesson = lessons.find((lesson) => lesson.id == lessonID)
	const source = subjectBooks.find((book) => book.id == sourceID)

	return (
		<div className="w-full h-full py-[54px]">
			<div
				className="
               w-11/12
               lg:w-10/12
               mx-auto
               min-h-[100vh]
               h-full
               bg-gradient-to-tr
               from-primary-200
               to-danger-100
               rounded-3xl
               relative
               grid
               grid-rows-5
            "
			>
				<Top source={source} lesson={lesson} />
				<Middle flashCards={flashCards} source={sourceID} />
				<Bottom />
			</div>
		</div>
	)
}

export default GameContainer
