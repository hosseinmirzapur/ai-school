import { IQuiz } from "@/types"
import { Card, Progress } from "@nextui-org/react"

interface IProps {
	answers: Record<number, string | string[]>
	quiz: IQuiz | null
}

const QuizSubmission: React.FC<IProps> = ({ answers, quiz }) => {
	const score = quiz?.questions.reduce((acc, question) => {
		// This is a mock scoring system. Replace with actual scoring logic.
		const correctAnswer = question.options[0] // Assuming first option is always correct for this example
		const userAnswer = answers[question.id]
		return acc + (userAnswer === correctAnswer ? 1 : 0)
	}, 0)

	const percentage =
		(score && quiz && (score / quiz.questions.length) * 100) || 0

	return (
		<div className="max-w-2xl mx-auto">
			<Card className="p-6 mb-8">
				<h2 className="text-2xl font-semibold mb-4">Quiz Results</h2>
				<Progress value={percentage} className="mb-4" />
				<p className="text-center text-xl">
					You scored {score} out of {quiz?.questions.length} (
					{percentage.toFixed(2)}%)
				</p>
			</Card>
			{quiz?.questions.map((question, index) => (
				<Card key={question.id} className="p-6 mb-4">
					<h3 className="text-lg font-semibold mb-2">
						Question {index + 1}
					</h3>
					<p className="mb-2">{question.text}</p>
					<p className="font-medium">
						Your answer: {answers[question.id]}
					</p>
					<p className="font-medium">
						Correct answer: {question.options[0]}
					</p>
				</Card>
			))}
		</div>
	)
}

export default QuizSubmission
