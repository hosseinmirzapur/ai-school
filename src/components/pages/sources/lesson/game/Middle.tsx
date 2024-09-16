"use client"

import { useState } from "react"

import { IFlashCard } from "./data"

import Flashcard from "./Flashcard"

import toast, { Toaster } from "react-hot-toast"

import { VscGame } from "react-icons/vsc"
import EndText from "./EndText"

interface IProps {
   flashCards: IFlashCard[]
}

const Middle: React.FC<IProps> = ({ flashCards }) => {
   // ** States and variables
   const [current, setCurrent] = useState(0)
   const [flipped, setFlipped] = useState(false)
   const [endText, setEndText] = useState("")

   // ** Functions
   const flip = () => setFlipped((curr) => !curr)

   const increment = () => {
      flip()
      if (current == flashCards.length - 1) {
         setEndText("تبریک! شما با موفقیت تمامی مراحل یادگیری رو طی کردین")
      }
      setCurrent((curr) => curr + 1)
   }

   const onFault = (item: IFlashCard) => {
      flip()
      toast("اشکال نداره، ما در آخر یه بار دیگه از شما این سوال رو میپرسیم!", {
         icon: <VscGame size={36} />,
         className: "bg-gradient-to-tr from-primary-200 to-secondary-200",
         duration: 5000,
      })
      const indexToMove = flashCards.findIndex((fc) => fc.id == item.id)
      if (indexToMove > -1) {
         const [element] = flashCards.splice(indexToMove, 1)
         flashCards.push(element)
      }
   }

   const reset = () => {
      setEndText("")
      setCurrent(0)
      setFlipped(false)
   }

   return (
      <>
         <div
            className={`
               row-span-3
               bg-[#F9F8FC80]/50
               w-11/12
               mx-auto
               rounded-3xl
               py-10
               md:py-8
               lg:p-6
               ${flipped ? "flip" : ""}
               flashcard-container
            `}
         >
            {/* Flashcard Container */}
            {flashCards.map((item, index) => (
               <Flashcard
                  key={index}
                  item={item}
                  hidden={current != index}
                  flipped={flipped}
                  increment={increment}
                  onFault={() => onFault(item)}
                  flip={flip}
               />
            ))}

            {/* End Text */}
            {endText != "" && <EndText reset={reset} text={endText} />}
         </div>

         <Toaster position="bottom-right" />
      </>
   )
}

export default Middle
