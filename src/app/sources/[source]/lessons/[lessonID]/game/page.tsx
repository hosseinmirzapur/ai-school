import GameContainer from "@/components/pages/sources/lesson/game/GameContainer"
import Base from "@/components/shared/Base"

interface IProps {
   source: number | string
   lessonID: number | string
}

const GamePage = ({ params }: { params: IProps }) => {
   return (
      <Base>
         <GameContainer sourceID={params.source} lessonID={params.lessonID} />
      </Base>
   )
}

export default GamePage
