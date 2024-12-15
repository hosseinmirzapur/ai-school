"use client"

import Image from "next/image"
import Link from "next/link"

import { blurDataUrl } from "@/utils"
import { ISubjectBook } from "@/types"
import SourcesSidebar from "./SourcesSidebar"

interface IProps {
	data: ISubjectBook[]
}

const SubjectBooks: React.FC<IProps> = ({ data }) => {
	// ** Functions
	const handleNotFoundError = (book: ISubjectBook) => {
		book.imageSrc = blurDataUrl
	}

	return (
		<>
			<SourcesSidebar />

			<div className="flex flex-col flex-wrap md:flex-row items-center justify-center gap-10 w-10/12 h-full">
				{data.map((book, index) => (
					<Link
						key={index}
						className="grid grid-cols-2 md:w-[280px] lg:w-[240px] min-h-[120px] max-h-[200px] rounded-[24px] py-2 px-1 gap-[16px] bg-white/60 shadow-md shadow-[#3F27661A] hover:scale-105 hover:shadow-lg transition-all cursor-pointer"
						href={`/sources/${book.id}`}
					>
						<div className="flex items-center justify-center text-base font-[700]">
							{book.title}
						</div>
						<div className="flex justify-center items-center bg-gradient-to-r from-red-200 to-blue-300 rounded-[16px] relative">
							<Image
								src={book.imageSrc}
								alt={book.title}
								draggable={false}
								placeholder="blur"
								blurDataURL={blurDataUrl}
								className="rounded-[16px] flex items-center justify-center"
								fill
								onError={() => handleNotFoundError(book)}
							/>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}

export default SubjectBooks
