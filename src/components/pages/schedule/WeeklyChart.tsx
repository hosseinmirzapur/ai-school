"use client"

import { useMemo } from "react"

import Bar from "./Bar"

import { barColor, persianDate } from "./utils"

import { IDailySchedule } from "./data"

interface IProps {
	chartData: IDailySchedule[]
}

const WeeklyChart: React.FC<IProps> = ({ chartData }) => {
	return (
		<div className="grid grid-rows-6 h-full w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
			{chartData.map((data, index) => (
				<div key={index} className="w-full">
					<div
						className="
                     flex
                     items-center
                     justify-center
                     text-[#6A2E7ECC]/80
                     text-xl
                     col-span-1
                  "
					>
						{persianDate(data.day)}
					</div>
					<div
						className={`
                     flex
                     items-center
                     border-t-1
                     border-black
                     border-opacity-20
                     gap-1
                     md:gap-3
                     lg:gap-5
                     h-[100px]
                     md:h-[90px]
                     col-span-9
                     w-full
                  `}
					>
						{data.subjects.map((subject, index) => {
							const { bgColor, textColor } = barColor()
							const width = (subject.duration / data.fullDuration) * 100

							return (
								<Bar
									key={index}
									subject={subject}
									bgColor={bgColor}
									textColor={textColor}
									width={`${width}%`}
								/>
							)
						})}
					</div>
				</div>
			))}
		</div>
	)
}

export default WeeklyChart
