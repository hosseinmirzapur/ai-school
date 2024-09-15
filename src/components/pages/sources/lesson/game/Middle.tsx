"use client"

import { useState } from "react"
import { FlashCard } from "./data"
import Flashcard from "./Flashcard"

interface IProps {
   flashCards: FlashCard[]
}

const Middle: React.FC<IProps> = ({ flashCards }) => {
   // ** States and variables
   const [current, setCurrent] = useState(0)

   const increment = () => setCurrent((curr) => curr + 1)
   const decrement = () => setCurrent((curr) => curr - 1)

   return (
      <div
         className="
            row-span-3
            bg-[#F9F8FC80]/50
            w-11/12
            mx-auto
            rounded-3xl
            p-4
         "
      >
         {/* Flashcard Container */}
         {flashCards.map((item, index) => (
            <Flashcard
               key={index}
               question={item.question}
               answer={item.answer}
               hidden={current != index}
               increment={increment}
            />
         ))}
      </div>
   )
}

export default Middle
