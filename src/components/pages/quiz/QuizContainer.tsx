"use client"

import { useEffect, useState } from "react"
import QuizDashboard from "./QuizDashboard"
import { IQuiz } from "@/types"
import { getAllQuizzes } from "@/libs/axios"
import { handleError } from "@/libs/axios/helper"

const QuizContainer = () => {
	// ** States and variables
	const [quizzes, setQuizzes] = useState<IQuiz[]>([])

	// ** Functions
	const fetchQuizzes = async () => {
		try {
			const { data } = await getAllQuizzes()
			setQuizzes(data.quizzes)
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
