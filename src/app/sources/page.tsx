import SourcesContainer from "@/components/pages/sources/SourcesContainer"
import Base from "@/components/shared/Base"
import { Suspense } from "react"
import Loading from "../loading"

export default function Sources() {
   return (
      <Base>
         <SourcesContainer />
      </Base>
   )
}
