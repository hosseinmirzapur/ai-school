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
		<div
			className="
            flex
            w-full
            items-center
            h-full
            min-h-[100vh]
            py-[54px]
         "
		>
			<div
				className="
               bg-gradient-to-tr
               from-blue-200
               to-red-200
               w-11/12
               h-full
               min-h-[100vh]
               mx-auto
               rounded-3xl
               shadow-md
               flex
               flex-col
               items-center
               justify-evenly
               gap-10
               py-10
               lg:py-0
            "
			>
				<div
					className="
                  flex
                  justify-center
                  text-[50px]
                  text-[#4B185C]
                  font-bold
                  w-full
                  h-full
               "
				>
					منابع آموزشی
				</div>
				{isLoading ? (
					<Spinner color="secondary" size="lg" />
				) : (
					<SubjectBooks data={sources} />
				)}
			</div>
		</div>
	)
}

export default SourcesContainer
