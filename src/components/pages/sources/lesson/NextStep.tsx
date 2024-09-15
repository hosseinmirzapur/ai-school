"use client"

import { Button } from "@nextui-org/react"
import { GoChevronRight } from "react-icons/go"

const NextStep = () => {
   return (
      <Button
         radius="full"
         size="md"
         startContent={<GoChevronRight size={18} />}
         className="bg-primary-100"
         variant="shadow"
      >
         مرحله بعد
      </Button>
   )
}

export default NextStep
