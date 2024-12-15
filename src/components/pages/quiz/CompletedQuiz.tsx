"use client"

import { IQuiz } from "@/types"
import { motionFX } from "@/utils"
import {
	Card,
	CardBody,
	CardHeader,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react"
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
			<Card className="h-full">
				<CardHeader>
					<h2 className="text-2xl font-bold">Completed Quizzes</h2>
				</CardHeader>
				<CardBody>
					<Table>
						<TableHeader>
							<TableColumn>Quiz Name</TableColumn>
							<TableColumn>Score</TableColumn>
							<TableColumn>Date Completed</TableColumn>
						</TableHeader>
						<TableBody>
							<TableRow key="1">
								<TableCell>React Basics</TableCell>
								<TableCell>85%</TableCell>
								<TableCell>2023-06-15</TableCell>
							</TableRow>
							<TableRow key="2">
								<TableCell>CSS Flexbox</TableCell>
								<TableCell>92%</TableCell>
								<TableCell>2023-06-10</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardBody>
			</Card>
		</motion.div>
	)
}

export default CompletedQuiz
