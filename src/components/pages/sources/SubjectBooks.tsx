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
	return (
		<>
			<SourcesSidebar />

			<div className="flex flex-col flex-wrap md:flex-row items-center justify-center gap-14 w-10/12 h-full">
				{data.map((book, index) => (
					<Link
						key={index}
						className="grid grid-cols-2 md:w-[280px] lg:w-[240px] min-h-[120px] max-h-[200px] rounded-[24px] py-2 px-1 gap-[16px] bg-white/60 shadow-md shadow-[#3F27661A] hover:scale-105 hover:shadow-lg transition-all cursor-pointer"
						href={`/sources/${book.id}`}
					>
						<div className="flex items-center justify-center text-lg font-[700]">
							{book.title}
						</div>
						<div className="flex justify-center bg-gradient-to-r from-red-200 to-blue-300 rounded-[16px] p-3">
							<Image
								src={book.imageSrc}
								alt={book.title}
								width={100}
								height={100}
								draggable={false}
								placeholder="blur"
								blurDataURL={blurDataUrl}
								className="rounded-[16px]"
							/>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}

export default SubjectBooks
