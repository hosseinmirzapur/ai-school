"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const BagAndLaptop = () => {
	return (
		<motion.div
			className="
				lg:flex
				justify-center
				items-center
				lg:relative
				w-11/12
				mx-auto
				z-[-1]
				h-full
			"
			initial={{
				opacity: 0,
				scale: 0.9,
				rotate: -5,
			}}
			animate={{
				opacity: 1,
				scale: 1,
				rotate: 0,
			}}
			transition={{
				duration: 0.8,
				ease: "easeInOut",
			}}
		>
			<div
				className="
					absolute
					top-10
					right-10
					w-[250px]
					h-[250px]
					md:w-[300px]
					md:h-[300px]
					lg:w-[350px]
					lg:h-[350px]
					opacity-60
					md:opacity-80
					lg:opacity-100
				"
			>
				<Image
					src={"/assets/school-bag.png"}
					alt="school-bag"
					fill
					className="object-contain"
				/>
			</div>
			<div
				className="
					absolute
					bottom-0
					left-0
					lg:bottom-24
					w-[343px]
					h-[343px]
					md:w-[443px]
					md:h-[443px]
					lg:w-[520px]
					lg:h-[520px]
					opacity-60
					md:opacity-80
					lg:opacity-100
				"
			>
				<Image
					src={"/assets/online-study.png"}
					alt="online-study"
					fill
					className="object-contain"
				/>
			</div>
		</motion.div>
	)
}

export default BagAndLaptop
