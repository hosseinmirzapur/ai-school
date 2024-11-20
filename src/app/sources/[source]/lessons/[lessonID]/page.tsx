import LessonContainer from "@/components/pages/sources/lesson/LessonContainer"
import Base from "@/components/shared/Base"

interface IProps {
	source: number | string
	lessonID: number | string
}

const LessonPage = ({ params }: { params: IProps }) => {
	return (
		<Base needsAuth>
			<LessonContainer lessonID={params.lessonID} sourceID={params.source} />
		</Base>
	)
}

export default LessonPage
