import LessonContainer from "@/components/pages/sources/lesson/LessonContainer"
import Base from "@/components/shared/Base"

interface IProps {
   lessonID: number | string
}

const LessonPage = ({ params }: { params: IProps }) => {
   return (
      <Base>
         <LessonContainer lessonID={params.lessonID} />
      </Base>
   )
}

export default LessonPage
