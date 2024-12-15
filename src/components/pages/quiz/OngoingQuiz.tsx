"use client"

import { IQuiz } from "@/types"
import { motionFX } from "@/utils"
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
			OngoingQuiz
		</motion.div>
	)
}

export default OngoingQuiz
