"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const BagAndLaptop = () => {
	return (
		<motion.div
			className="hidden lg:flex justify-center items-center relative w-11/12 mx-auto"
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				duration: 0.8,
			}}
		>
			<Image
				src={"/assets/bagnlap-bg.png"}
				alt="bagnlap-bg"
				width={624}
				height={624}
			/>
			<div className="absolute top-0 right-0 w-[400px] h-[400px]">
				<Image
					src={"/assets/school-bag.png"}
					alt="school-bag"
					fill
					className="object-contain"
				/>
			</div>
			<div className="absolute bottom-20 w-[543px] h-[543px]">
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
