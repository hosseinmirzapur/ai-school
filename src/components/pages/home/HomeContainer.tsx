"use client"

import RightSide from "./RightSide"
import LeftSide from "./LeftSide"

const HomeContainer = () => {
	return (
		<div className="container h-full min-h-[100vh]">
			<div
				className="
					w-11/12
					mx-auto
					grid
					grid-rows-1
					lg:grid-cols-3
					pt-2
					pb-10
					h-full
					place-items-center
					space-y-20
            	"
			>
				{/* Right Side */}
				<RightSide />

				{/* Left Side */}
				<LeftSide />
			</div>
		</div>
	)
}

export default HomeContainer
