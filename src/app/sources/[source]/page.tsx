import AllLessonsContainer from "@/components/pages/sources/AllLessonsContainer"
import Base from "@/components/shared/Base"

interface IParams {
	source: string
}

const Lesson = ({ params }: { params: IParams }) => {
	return (
		<Base needsAuth>
			<AllLessonsContainer source={params.source} />
		</Base>
	)
}

export default Lesson
