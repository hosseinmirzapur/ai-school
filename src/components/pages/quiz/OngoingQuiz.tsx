"use client"

import { IQuiz } from "@/types"
import { motionFX } from "@/utils"
import { Card, CardBody } from "@nextui-org/react"
import { motion } from "framer-motion"

interface IProps {
	quizzes: IQuiz[]
}

const OngoingQuiz: React.FC<IProps> = () => {
	return (
		<motion.div
			initial={motionFX.initial}
			animate={motionFX.animate}
			transition={motionFX.transition}
		>
			<Card isPressable isHoverable>
				<CardBody>
					<span>برای شرکت در آزمون کلیک کنید</span>
				</CardBody>
			</Card>
		</motion.div>
	)
}

export default OngoingQuiz
