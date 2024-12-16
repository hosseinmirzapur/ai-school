"use client"

import { IQuiz } from "@/types"
import { motionFX } from "@/utils"
import { Card, CardBody } from "@nextui-org/react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface IProps {
	quizzes: IQuiz[]
}

const OngoingQuiz: React.FC<IProps> = () => {
	// ** States and variables
	const router = useRouter()

	// ** Funtions
	const handleCurrentQuiz = () => {
		router.push("#")
	}

	return (
		<motion.div
			initial={motionFX.initial}
			animate={motionFX.animate}
			transition={motionFX.transition}
			className="flex items-center justify-center min-h-[50vh]"
			onClick={handleCurrentQuiz}
		>
			<Card isPressable isHoverable className="bg-secondary-100">
				<CardBody className="flex flex-col gap-3 items-center justify-center h-[300px] w-[300px]">
					<Image
						src={"/assets/quiz.png"}
						alt="quiz-icon"
						width={200}
						height={200}
					/>
					<span className="text-lg">برای شرکت در آزمون کلیک کنید</span>
				</CardBody>
			</Card>
		</motion.div>
	)
}

export default OngoingQuiz
