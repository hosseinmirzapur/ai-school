"use client"

import { useEffect, useState } from "react"
import SubjectBooks from "./SubjectBooks"
import { getAllSources } from "@/libs/axios"
import { Spinner } from "@nextui-org/react"
import { ISubjectBook } from "@/types"

const SourcesContainer = () => {
	// ** States and variables
	const [sources, setSources] = useState<ISubjectBook[]>([])
	const [isLoading, setisLoading] = useState(false)

	// ** Functions
	const getSources = async () => {
		setisLoading(true)
		try {
			const res = await getAllSources()
			setSources(res.data.sources)
			setisLoading(false)
		} catch (error) {
			if (error instanceof Error) {
				console.log(error)
			}
			setisLoading(false)
		}
	}

	useEffect(() => {
		getSources()
	}, [])

	return (
		<>
			<div className="w-full py-[32px]">
				<div className="grid place-items-center bg-gradient-to-tr from-blue-200 to-red-200 w-11/12 min-h-screen mx-auto rounded-3xl shadow-md py-5 relative">
					<div className="flex justify-center text-3xl text-[#4B185C] font-bold w-full my-5">
						منابع آموزشی
					</div>
					{isLoading ? (
						<Spinner color="secondary" size="lg" />
					) : (
						<SubjectBooks data={sources} />
					)}
				</div>
			</div>
		</>
	)
}

export default SourcesContainer
