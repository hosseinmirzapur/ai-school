"use client"

import { BreadcrumbItem, Breadcrumbs, Spinner } from "@nextui-org/react"
import { GoChevronLeft } from "react-icons/go"
import LessonBox from "./LessonBox"
import { useEffect, useState } from "react"
import { getOneSource } from "@/libs/axios"
import { ILesson, ISubjectBook } from "@/types"

interface IProps {
	source: string | number
}

const AllLessonsContainer: React.FC<IProps> = ({ source }) => {
	// ** States and variables
	const [lessons, setLessons] = useState<ILesson[]>([])
	const [book, setbook] = useState<ISubjectBook>()
	const [isLoading, setIsLoading] = useState(false)

	// ** Functions
	const getLessons = async () => {
		setIsLoading(true)
		try {
			const res = await getOneSource(source, false)
			setLessons(res.data.lessons)
			setbook(res.data.subject)
			setIsLoading(false)
		} catch (error) {
			if (error instanceof Error) {
				console.log(error)
			}
			setIsLoading(false)
		}
	}

	useEffect(() => {
		getLessons()
	}, [])

	return (
		<div className="flex w-full h-full min-h-[100vh] py-[54px]">
			<div className="grid grid-rows-1 space-y-10 lg:grid-rows-5 lg:space-y-0 bg-gradient-to-tr from-blue-200 to-red-200 w-11/12 lg:py-10 mx-auto rounded-3xl shadow-md py-10">
				{/* Breadcrumbs */}
				<div className="w-10/12 mx-auto flex items-center row-span-1">
					<Breadcrumbs size="lg" separator={<GoChevronLeft size={22} />}>
						<BreadcrumbItem href="/sources">
							<span className="text-lg">منابع آموزشی</span>
						</BreadcrumbItem>
						<BreadcrumbItem>
							<span className="text-lg">{book?.title}</span>
						</BreadcrumbItem>
					</Breadcrumbs>
				</div>

				{/* Lessons Container */}
				<div className="w-full md:w-11/12 mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 row-span-2">
					{isLoading ? (
						<Spinner color="secondary" size="lg" />
					) : (
						lessons.map((lesson, index) => (
							<LessonBox key={index} lesson={lesson} book={book} />
						))
					)}
				</div>
			</div>
		</div>
	)
}

export default AllLessonsContainer
