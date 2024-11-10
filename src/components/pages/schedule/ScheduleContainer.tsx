"use client"

import { FaArrowUp } from "react-icons/fa"
import WeeklyChart from "./WeeklyChart"
import { IDailySchedule } from "./data"
import { useEffect, useState } from "react"
import { getWeeklySchedule } from "@/libs/axios"

const ScheduleContainer = () => {
	// ** states and variables
	const [schedule, setSchedule] = useState<IDailySchedule[]>([])

	// ** Functions
	const fetchData = async () => {
		try {
			const res = await getWeeklySchedule()
			setSchedule(res.data.schedule)
		} catch (error) {
			if (error instanceof Error) {
				console.log(error)
			}
		}
	}
	useEffect(() => {
		fetchData()
	}, [])
	return (
		<div className="flex w-full items-center min-h-[100vh] h-full py-12 md:py-3 lg:py-10">
			<div
				className="
					grid
					grid-rows-1
					h-full
					w-11/12
					md:w-10/12
					lg:w-9/12
					mx-auto
					place-items-center
					rounded-[40px]
					bg-[#EDFBFF]
					shadow-md
					py-10
					gap-20
				"
			>
				<div className="flex justify-between w-11/12 md:w-10/12 lg:w-9/12 mx-auto row-span-1">
					<div className="text-3xl font-bold">برنامه هفتگی</div>
					<div>
						<FaArrowUp className="rotate-[-45deg]" size={40} />
					</div>
				</div>
				<WeeklyChart chartData={schedule} />
			</div>
		</div>
	)
}

export default ScheduleContainer
