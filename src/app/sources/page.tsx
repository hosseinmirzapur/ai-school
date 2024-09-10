import SourcesContainer from "@/components/pages/sources/SourcesContainer"
import Base from "@/components/shared/Base"
import { Suspense } from "react"

export default function Sources() {
   return (
      <Suspense fallback={<div>لطفا منتظر بمانید...</div>}>
         <Base>
            <SourcesContainer />
         </Base>
      </Suspense>
   )
}
