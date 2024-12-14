"use client"

import { useState, useEffect } from "react"
import {
	Card,
	Button,
	Progress,
	Radio,
	Checkbox,
	RadioGroup,
	CheckboxGroup,
} from "@nextui-org/react"
import QuizSubmission from "./QuizSubmission"
import { IQuiz } from "@/types"

const QuizContainer = () => {
	const [quiz, setQuiz] = useState<IQuiz | null>(null)
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [answers, setAnswers] = useState<Record<number, string | string[]>>({})
	const [submitted, setSubmitted] = useState(false)

	useEffect(() => {
		// Simulating API call to fetch quiz data
		const fetchQuiz = async () => {
			// Replace this with actual API call
			const mockQuiz: IQuiz = {
				id: "first-quiz",
				title: "Sample Quiz",
				questions: [
					{
						id: 1,
						text: "What is the capital of France?",
						type: "multiple-choice",
						options: ["London", "Berlin", "Paris", "Madrid"],
					},
					{
						id: 2,
						text: "Is the Earth flat?",
						type: "true-false",
						options: ["True", "False"],
					},
					{
						id: 3,
						text: "Which of the following are primary colors?",
						type: "multiple-choice",
						options: ["Red", "Green", "Blue", "Yellow"],
					},
				],
			}
			setQuiz(mockQuiz)
		}
		fetchQuiz()
	}, [])

	const handleAnswer = (questionId: number, answer: string | string[]) => {
		setAnswers((prev) => ({ ...prev, [questionId]: answer }))
	}

	const handleSubmit = () => {
		setSubmitted(true)
	}

	const progress = quiz
		? (Object.keys(answers).length / quiz.questions.length) * 100
		: 0

	if (submitted) return <QuizSubmission answers={answers} quiz={quiz} />

	const currentQuestionData = quiz?.questions[currentQuestion]

	return (
		<div className="max-w-2xl mx-auto">
			<Progress value={progress} className="mb-8" />
			<Card className="p-6 mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					{currentQuestionData?.text}
				</h2>
				{currentQuestionData?.type === "multiple-choice" ? (
					<RadioGroup
						value={answers[currentQuestionData.id] as string}
						onValueChange={(value) =>
							handleAnswer(currentQuestionData.id as number, value)
						}
					>
						{currentQuestionData.options.map((option, index) => (
							<Radio key={index} value={option}>
								{option}
							</Radio>
						))}
					</RadioGroup>
				) : (
					<CheckboxGroup
						value={
							(answers[currentQuestionData?.id as number] as string[]) ||
							[]
						}
						onChange={(value) =>
							handleAnswer(currentQuestionData?.id as number, value)
						}
					>
						{currentQuestionData?.options.map((option, index) => (
							<Checkbox key={index} value={option}>
								{option}
							</Checkbox>
						))}
					</CheckboxGroup>
				)}
			</Card>
			<div className="flex justify-between">
				<Button
					autoFocus
					disabled={currentQuestion === 0}
					onPress={() => setCurrentQuestion((prev) => prev - 1)}
				>
					Previous
				</Button>
				{currentQuestion < ((quiz && quiz.questions.length - 1) || 0) ? (
					<Button
						autoFocus
						onPress={() => setCurrentQuestion((prev) => prev + 1)}
					>
						Next
					</Button>
				) : (
					<Button
						autoFocus
						color="success"
						disabled={
							Object.keys(answers).length !== quiz?.questions.length
						}
						onPress={handleSubmit}
					>
						Submit
					</Button>
				)}
			</div>
		</div>
	)
}

export default QuizContainer
