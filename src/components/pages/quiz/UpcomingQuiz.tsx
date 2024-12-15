"use client"

import { IQuiz } from "@/types"
import { motionFX } from "@/utils"
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react"
import { motion } from "framer-motion"

interface IProps {
	quizzes: IQuiz[]
}

const UpcomingQuiz: React.FC<IProps> = () => {
	return (
		<motion.div
			initial={motionFX.initial}
			animate={motionFX.animate}
			transition={motionFX.transition}
		>
			<Card className="mt-8">
				<CardHeader>
					<h2 className="text-2xl font-bold">Quiz Summary</h2>
				</CardHeader>
				<CardBody>
					<div className="flex justify-around">
						<div className="text-center">
							<Chip color="primary" variant="shadow">
								5
							</Chip>
							<p className="mt-2">Quizzes Completed</p>
						</div>
						<div className="text-center">
							<Chip color="warning" variant="shadow">
								2
							</Chip>
							<p className="mt-2">Quizzes Remaining</p>
						</div>
						<div className="text-center">
							<Chip color="success" variant="shadow">
								88%
							</Chip>
							<p className="mt-2">Average Score</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</motion.div>
	)
}

export default UpcomingQuiz
