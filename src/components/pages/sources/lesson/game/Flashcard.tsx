"use client"

import { Button } from "@nextui-org/react"
import { useState } from "react"

interface IProps {
   question: string
   answer: string
   img?: string
   hidden: boolean
   increment: () => void
}
const Flashcard: React.FC<IProps> = ({
   question,
   answer,
   img,
   hidden,
   increment,
}) => {
   const [flipped, setFlipped] = useState(false)

   // ** Functions
   const flip = () => setFlipped(true)
   const reset = () => setFlipped(false)

   return hidden ? (
      <></>
   ) : (
      <div
         className={`w-full grid grid-rows-3 h-full flashcard ${
            flipped ? "flip" : ""
         }`}
      >
         {/* Type of flashcard */}
         <div
            className={`
                  row-span-1
                  flex
                  justify-center
                  items-center
                  text-2xl
                  font-bold
                  ${flipped ? "flashcard-back" : "flashcard-front"}
               `}
         >
            {flipped ? <span>پاسخ</span> : <span>سوال</span>}
         </div>

         {/* Flashcard content */}
         <div
            className={`
                  row-span-1
                  flex
                  justify-center
                  items-center
                  ${flipped ? "flashcard-back" : "flashcard-front"}
               `}
         >
            {flipped ? (
               <span className="text-lg lg:text-2xl">{answer}</span>
            ) : (
               <span className="text-lg lg:text-2xl">{question}</span>
            )}
         </div>

         {/* Flashcard actions */}
         <div
            className={`
                  flex
                  w-full
                  justify-center
                  items-center
                  ${flipped ? "flashcard-back" : "flashcard-front"}
               `}
         >
            {flipped ? (
               <div className="flex justify-around w-full">
                  <Button
                     className="bg-[#96FFC5] font-bold"
                     variant="shadow"
                     radius="full"
                     size="lg"
                     onClick={increment}
                  >
                     یاد گرفتم
                  </Button>
                  <Button
                     className="bg-[#FCAA8D] font-bold"
                     variant="shadow"
                     onClick={reset}
                     radius="full"
                     size="lg"
                  >
                     دوباره
                  </Button>
               </div>
            ) : (
               <div className="flex justify-around">
                  <Button
                     className="text-base font-bold"
                     color="secondary"
                     variant="ghost"
                     onClick={flip}
                     radius="full"
                     size="lg"
                  >
                     دیدن جواب
                  </Button>
               </div>
            )}
         </div>
      </div>
   )
}

export default Flashcard
