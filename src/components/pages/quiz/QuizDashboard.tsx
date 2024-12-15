"use client"

import { IQuiz } from "@/types"
import { BreadcrumbItem, Breadcrumbs, Tab, Tabs } from "@nextui-org/react"
import OngoingQuiz from "./OngoingQuiz"
import CompletedQuiz from "./CompletedQuiz"
import UpcomingQuiz from "./UpcomingQuiz"
import { BookCheck, CalendarClock, ChevronLeft, Radio } from "lucide-react"

interface IProps {
	quizzes: IQuiz[]
}

const QuizDashboard: React.FC<IProps> = ({ quizzes }) => {
	return (
		<div className="flex flex-col gap-10 w-11/12 mx-auto h-full">
			<Breadcrumbs
				separator={<ChevronLeft size={22} />}
				size="lg"
				color="secondary"
			>
				<BreadcrumbItem href="/">خانه</BreadcrumbItem>
				<BreadcrumbItem href="/sources">منابع آموزشی</BreadcrumbItem>
				<BreadcrumbItem>آزمون ها</BreadcrumbItem>
			</Breadcrumbs>

			<Tabs
				className="w-full flex flex-col"
				color="secondary"
				variant="underlined"
				size="lg"
			>
				<Tab
					key={"upcoming"}
					title={
						<div className="flex items-center gap-5">
							<CalendarClock />
							<span>پیش رو</span>
						</div>
					}
				>
					<UpcomingQuiz
						quizzes={quizzes.filter((quiz) => quiz.status === "upcoming")}
					/>
				</Tab>
				<Tab
					key={"ongoing"}
					title={
						<div className="flex items-center gap-5">
							<Radio />
							<span>در حال برگزاری</span>
						</div>
					}
				>
					<OngoingQuiz
						quizzes={quizzes.filter((quiz) => quiz.status === "ongoing")}
					/>
				</Tab>

				<Tab
					key={"completed"}
					title={
						<div className="flex items-center gap-5">
							<BookCheck />
							<span>به اتمام رسیده</span>
						</div>
					}
				>
					<CompletedQuiz
						quizzes={quizzes.filter(
							(quiz) => quiz.status === "completed",
						)}
					/>
				</Tab>
			</Tabs>
		</div>
	)
}

export default QuizDashboard
