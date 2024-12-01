import QuizContainer from "@/components/pages/quiz/QuizContainer"
import QuizLoader from "@/components/pages/quiz/QuizLoader"
import Base from "@/components/shared/Base"
import { Suspense } from "react"

export default function QuizPage() {
	return (
		<Base needsAuth>
			<Suspense fallback={<QuizLoader />}>
				<QuizContainer />
			</Suspense>
		</Base>
	)
}
