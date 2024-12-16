"use client"

import { IQuiz } from "@/types"
import { motionFX } from "@/utils"
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react"
import { motion } from "framer-motion"
import { Brain, CalendarCheck, EllipsisVertical } from "lucide-react"

interface IProps {
	quizzes: IQuiz[]
}

const columns: string[] = ["#", "عنوان", "توضیحات", "تاریخ برگزاری", "عملیات"]

const UpcomingQuiz: React.FC<IProps> = ({ quizzes }) => {
	return (
		<motion.div
			initial={motionFX.initial}
			animate={motionFX.animate}
			transition={motionFX.transition}
		>
			<Table color="secondary" isStriped>
				<TableHeader>
					{columns.map((column, index) => (
						<TableColumn key={index}>{column}</TableColumn>
					))}
				</TableHeader>

				<TableBody>
					{quizzes.map((quiz, index) => (
						<TableRow key={index}>
							<TableCell>{index + 1}</TableCell>
							<TableCell>{quiz.title}</TableCell>
							<TableCell className="min-w-[150px] text-sm">
								{quiz.description || "---"}
							</TableCell>
							<TableCell>{quiz.due_date || "---"}</TableCell>
							<TableCell>
								<Dropdown showArrow>
									<DropdownTrigger>
										<Button isIconOnly size="sm" variant="light">
											<EllipsisVertical className="text-default-300" />
										</Button>
									</DropdownTrigger>
									<DropdownMenu>
										<DropdownItem
											key="schedule"
											startContent={<CalendarCheck />}
											color="secondary"
											variant="flat"
										>
											برنامه ریزی
										</DropdownItem>
										<DropdownItem
											key={"study"}
											startContent={<Brain />}
											color="primary"
											variant="flat"
										>
											تمرین برای آزمون
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</motion.div>
	)
}

export default UpcomingQuiz
