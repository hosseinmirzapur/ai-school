"use client"

import Image from "next/image"
import Link from "next/link"

import { ILesson, ISubjectBook } from "./data"
import { blurDataUrl } from "@/utils"

interface IProps {
	lesson: ILesson
	book: ISubjectBook
}

const LessonBox: React.FC<IProps> = ({ book, lesson }) => {
	return (
		<Link
			href={`/sources/${book.id}/lessons/${lesson.id}`}
			className="
            w-[250px]
            h-[100px]
            bg-gradient-to-tr
            from-primary-300
            to-secondary-300
            grid
            grid-cols-3
            place-items-center
            rounded-2xl
            shadow-lg
            cursor-pointer
            hover:shadow-2xl
            transition-all
         "
		>
			<div className="col-span-2 text-xl font-semibold text-white/90">
				{lesson.name}
			</div>
			<div className="col-span-1">
				<Image
					src={"/assets/lesson.png"}
					alt=""
					width={50}
					height={50}
					placeholder="blur"
					blurDataURL={blurDataUrl}
				/>
			</div>
		</Link>
	)
}

export default LessonBox
