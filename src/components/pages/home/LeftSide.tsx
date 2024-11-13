"use client"

// import ProfileCard from "@/components/students/ProfileCard"
// import Rankings from "@/components/students/Rankings"

const LeftSide = () => {
	return (
		<div className="col-span-1 grid grid-rows-1 lg:grid-rows-4 h-full">
			<div className="hidden lg:flex justify-center items-center lg:row-span-1">
				{/* <ProfileCard profile={profile} /> */}
			</div>
			<div className="lg:row-span-3 flex items-center ">
				{/* <Rankings chartData={rankings} /> */}
			</div>
		</div>
	)
}

export default LeftSide
