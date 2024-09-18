"use client"

import Image from "next/image"

import { Button } from "@nextui-org/react"

import { MdReplay } from "react-icons/md"
import { TiArrowBack } from "react-icons/ti"
import { useRouter } from "next/navigation"

interface IProps {
   text: string
   reset: () => void
}

const EndText: React.FC<IProps> = ({ reset, text }) => {
   const { back } = useRouter()
   return (
      <div
         className="
            w-11/12
            mx-auto
            h-full
            grid
            grid-rows-3
            place-items-center
        "
      >
         <span className="text-lg font-semibold w-full text-center">
            {text}
         </span>
         <div className="flex items-center justify-center">
            <Image
               src={"/assets/success.png"}
               alt="success-icon"
               width={180}
               height={180}
               draggable={false}
            />
         </div>
         <div className="flex items-center justify-center gap-2 w-full">
            <Button
               color="secondary"
               variant="shadow"
               startContent={<MdReplay size={20} />}
               onClick={reset}
            >
               بازی مجدد
            </Button>
            <Button
               color="primary"
               variant="shadow"
               startContent={<TiArrowBack size={20} />}
               onClick={() => back()}
            >
               درس های دیگر
            </Button>
         </div>
      </div>
   )
}

export default EndText