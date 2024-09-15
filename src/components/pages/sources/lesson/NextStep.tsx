"use client"

import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { GoChevronRight } from "react-icons/go"

interface IProps {
   sourceID: number | string
   lessonID: number | string
}

const NextStep: React.FC<IProps> = ({ sourceID, lessonID }) => {
   const { push } = useRouter()
   return (
      <Button
         radius="full"
         size="md"
         startContent={<GoChevronRight size={18} />}
         className="bg-primary-100"
         variant="shadow"
         onClick={() => push(`/sources/${sourceID}/lessons/${lessonID}/game`)}
      >
         مرحله بعد
      </Button>
   )
}

export default NextStep
