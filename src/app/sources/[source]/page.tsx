import AllLessonsContainer from "@/components/pages/sources/AllLessonsContainer"
import Base from "@/components/shared/Base"
import { Metadata } from "next"

interface IParams {
   source: string
}

export const metadata: Metadata = {
   title: "Lessons",
}

const Lesson = ({ params }: { params: IParams }) => {
   return (
      <Base>
         <AllLessonsContainer source={params.source} />
      </Base>
   )
}

export default Lesson
