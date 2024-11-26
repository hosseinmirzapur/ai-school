"use client"

import { useState } from "react"

import Header from "./right/Header"
import HomeCard from "./right/HomeCard"
import EducationYear from "./right/EducationYear"
// import ChartCard from "./right/ChartCard"

const RightSide = () => {
	// ** States and variables
	const [year, setYear] = useState<number>(1403)

	return (
		<div className="lg:col-span-2 col-span-full flex flex-col space-y-28 h-full">
			<Header notifications={[]} />

			{/* Middle Content */}
			<div className="flex flex-wrap gap-5 justify-center">
				<HomeCard
					backgroundSrc="/assets/background.jpg"
					iconSrc="/assets/clock.png"
					text="میزان فعالیت"
					href="#"
				/>
				<HomeCard
					backgroundSrc="/assets/background-2.jpg"
					iconSrc="/assets/globe.png"
					text="از من بپرس"
					href="/chat"
				/>
				<HomeCard
					backgroundSrc="/assets/background-3.jpg"
					iconSrc="/assets/books-on-eachother.png"
					text="منابع آموزشی"
					href="/sources"
				/>
			</div>
			<div className="flex flex-col gap-5 items-center lg:items-start">
				<EducationYear year={year} setYear={setYear} />
				{/* <ChartCard chartData={chartData} year={year} /> */}
			</div>
		</div>
	)
}

export default RightSide
