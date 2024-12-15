"use client"

import { IQuiz } from "@/types"
import { motionFX } from "@/utils"
import { motion } from "framer-motion"

interface IProps {
	quizzes: IQuiz[]
}

const CompletedQuiz: React.FC<IProps> = () => {
	return (
		<motion.div
			initial={motionFX.initial}
			animate={motionFX.animate}
			transition={motionFX.transition}
		>
			CompletedQuiz
		</motion.div>
	)
}

export default CompletedQuiz
