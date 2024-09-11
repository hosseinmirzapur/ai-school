import LessonsContainer from "@/components/pages/sources/LessonsContainer"
import Base from "@/components/shared/Base"

interface IParams {
   source: string
}

const Lesson = ({ params }: { params: IParams }) => {
   return (
      <Base>
         <LessonsContainer source={params.source} />
      </Base>
   )
}

export default Lesson
