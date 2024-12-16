"use client"

import { useEffect, useState } from "react"
import QuizDashboard from "./QuizDashboard"
import { IQuiz } from "@/types"
// import { getAllQuizzes } from "@/libs/axios"
import { handleError } from "@/libs/axios/helper"
const quizData: IQuiz[] = [
	// Upcoming quizzes
	{
		id: 1,
		title: "آزمون فیزیک پیشرفته",
		status: "upcoming",
		description: "دانش فیزیک خود را با این آزمون پیشرفته به چالش بکشید.",
		due_date: "1402/10/10",
		questions: [],
	},
	{
		id: 2,
		title: "آزمون هنر مدرن",
		status: "upcoming",
		description: "دانش خود را درباره جنبش‌ها و هنرمندان هنر مدرن بیازمایید.",
		due_date: "1402/10/20",
		questions: [],
	},
	{
		id: 3,
		title: "مبانی زمین‌شناسی",
		status: "upcoming",
		description: "مفاهیم پایه زمین‌شناسی را بیاموزید و خود را ارزیابی کنید.",
		due_date: "1402/10/25",
		questions: [],
	},
	{
		id: 4,
		title: "تاریخچه اکتشافات فضایی",
		status: "upcoming",
		description: "چقدر از تاریخچه اکتشافات فضایی اطلاع دارید؟",
		due_date: "1402/11/01",
		questions: [],
	},

	// Ongoing quizzes
	{
		id: 5,
		title: "آزمون پایتخت‌های جهان",
		status: "ongoing",
		description:
			"یک آزمون سرگرم‌کننده برای ارزیابی دانش شما از پایتخت‌های جهان.",
		due_date: "1402/09/27",
		questions: [],
	},
	{
		id: 6,
		title: "تاریخچه ورزش",
		status: "ongoing",
		description: "دانش خود را درباره لحظات مهم تاریخی در ورزش آزمایش کنید.",
		due_date: "1402/10/02",
		questions: [],
	},
	{
		id: 7,
		title: "مبانی امنیت سایبری",
		status: "ongoing",
		description: "مفاهیم اولیه امنیت سایبری را با این آزمون بیاموزید.",
		due_date: "1402/10/05",
		questions: [],
	},
	{
		id: 8,
		title: "چالش‌های زیست‌محیطی جهانی",
		status: "ongoing",
		description:
			"آگاهی خود را درباره چالش‌های زیست‌محیطی جهانی ارزیابی کنید.",
		due_date: "1402/10/10",
		questions: [],
	},

	// Completed quizzes
	{
		id: 9,
		title: "مقدمه‌ای بر زیست‌شناسی",
		status: "completed",
		description: "اصول اولیه زیست‌شناسی را بیاموزید.",
		due_date: "1402/08/24",
		questions: [],
	},
	{
		id: 10,
		title: "آزمون جبر مقدماتی",
		status: "completed",
		description: "دانش خود را در مفاهیم پایه جبر ارزیابی کنید.",
		due_date: "1402/09/01",
		questions: [],
	},
	{
		id: 11,
		title: "تاریخ جنگ جهانی دوم",
		status: "completed",
		description: "چقدر از رویدادهای کلیدی جنگ جهانی دوم می‌دانید؟",
		due_date: "1402/09/10",
		questions: [],
	},
	{
		id: 12,
		title: "مبانی برنامه‌نویسی",
		status: "completed",
		description: "مفاهیم پایه برنامه‌نویسی را مرور کنید.",
		due_date: "1402/09/15",
		questions: [],
	},
]
const QuizContainer = () => {
	// ** States and variables
	const [quizzes, setQuizzes] = useState<IQuiz[]>([])

	// ** Functions
	const fetchQuizzes = async () => {
		try {
			// const { data } = await getAllQuizzes()
			setQuizzes(quizData)
		} catch (error) {
			if (error instanceof Error) {
				handleError(error)
			}
		}
	}

	useEffect(() => {
		fetchQuizzes()
	}, [])

	return (
		<div className="container pt-20">
			<QuizDashboard quizzes={quizzes} />
		</div>
	)
}

export default QuizContainer
