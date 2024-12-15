import QuizContainer from "@/components/pages/quiz/QuizContainer"
import Base from "@/components/shared/Base"

export default function QuizPage() {
	return (
		<Base needsAuth>
			<QuizContainer />
		</Base>
	)
}
